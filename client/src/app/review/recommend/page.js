"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../../../../components/navigation";
import styles from "./recommend.module.css";
import Link from "next/link";
import Footer from "../../../../components/footer";
import ScrollToTop from "../../../../components/ScrollToTop";

export default function Review() {
  const [reviews, setReviews] = useState([]); // All reviews fetched from API
  const [isRefreshing, setIsRefreshing] = useState(false); // For refresh functionality
  const [globalError, setGlobalError] = useState(null); // For error handling
  const [filterOption, setFilterOption] = useState("모두"); // For filtering reviews
  const [selectedReview, setSelectedReview] = useState(null); // For the modal
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false); // Modal state
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const REVIEWS_PER_PAGE = 9; // Number of reviews per page (adjust as needed)

  useEffect(() => {
    fetchReviews().catch((error) => setGlobalError("Failed to fetch reviews."));
  }, []);

  // Function to fetch reviews from API
  const fetchReviews = async () => {
    try {
      const response = await fetch("/api/reviews");
      const data = await response.json();
      if (response.ok) {
        const sortedReviews = data.reviews.sort(
          (a, b) => new Date(b.storedDate) - new Date(a.storedDate)
        );
        setReviews(sortedReviews);
      } else {
        console.error("Failed to fetch reviews");
        setGlobalError("리뷰를 불러오는 데에 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setGlobalError("리뷰를 불러오는 데에 오류가 발생했습니다.");
    }
  };

  // Filter reviews based on selected option
  const filterReviews = () => {
    const now = new Date();
    let filteredReviews = reviews;

    if (filterOption === "오늘") {
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate.toDateString() === now.toDateString();
      });
    } else if (filterOption === "이번주") {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= startOfWeek;
      });
    } else if (filterOption === "이번달") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= startOfMonth;
      });
    } else if (filterOption === "3달이내") {
      const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= threeMonthsAgo;
      });
    } else if (filterOption === "6달이내") {
      const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
      filteredReviews = reviews.filter((review) => {
        const reviewDate = new Date(review.storedDate);
        return reviewDate >= sixMonthsAgo;
      });
    }
    return filteredReviews;
  };

  const totalReviews = filterReviews().length;

  // Paginate reviews
  const indexOfLastReview = currentPage * REVIEWS_PER_PAGE;
  const indexOfFirstReview = indexOfLastReview - REVIEWS_PER_PAGE;
  const currentReviews = filterReviews().slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(filterReviews().length / REVIEWS_PER_PAGE);

  // Scroll to the top whenever the current page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Open review modal
  const openReviewModal = (review) => {
    setSelectedReview(review);
    setIsReviewModalOpen(true);
  };

  // Close review modal
  const closeReviewModal = () => {
    setSelectedReview(null);
    setIsReviewModalOpen(false);
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>추천서</h1>
            </div>
            <div className={styles.link}>
              <Link href='/'>홈</Link>
              <p>&gt;</p>
              <Link href='/review'>다르크 이야기</Link>
              <p>&gt;</p>
              <Link href='/review/recommend'>
                <h4>추천서</h4>
              </Link>
            </div>
          </div>

          <div className={styles.reviewSection}>
            <div className={styles.controlsContainer}>
              <div className={styles.leftAlignedControls}>
                {/* can you make me the text here which shows something like 'Total 3건 1페이지' which shows total number and page number?*/}
                <p>{`Total ${totalReviews}건 ${currentPage}페이지`}</p>
              </div>
              <div className={styles.rightAlignedControls}>
                <select
                  value={filterOption}
                  onChange={(e) => setFilterOption(e.target.value)}
                  className={styles.filterDropdown}
                >
                  <option value='모두'>모두</option>
                  <option value='오늘'>오늘</option>
                  <option value='이번주'>이번 주</option>
                  <option value='이번달'>이번 달</option>
                  <option value='3달이내'>3달 이내</option>
                  <option value='6달이내'>6달 이내</option>
                </select>
              </div>
            </div>

            {/* Render the current page reviews */}
            <div className={styles.reviewList}>
              {currentReviews.map((review) => {
                const reviewDate = new Date(review.storedDate);
                const today = new Date();
                const isToday =
                  reviewDate.toDateString() === today.toDateString();
                const formattedDate = isToday
                  ? reviewDate.toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : reviewDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });
                return (
                  <div
                    key={review._id} // Ensure key is set
                    className={styles.reviewBox}
                    onClick={() => openReviewModal(review)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={styles.reviewHeader}>
                      <img
                        src='/star.png'
                        alt='Star Icon'
                        className={styles.star}
                      />
                      <span className={styles.reviewDate}>{formattedDate}</span>
                    </div>
                    <div className={styles.userCard}>
                      <img
                        src='/userTest.png'
                        alt='User'
                        className={styles.user}
                      />
                      <div className={styles.name}>
                        <p>{review.name}</p>
                        <label>{review.job}</label>
                      </div>
                    </div>
                    <p className={styles.reviewText}>{review.text}</p>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ""}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Review Modal */}
        {isReviewModalOpen && selectedReview && (
          <div className={styles.modal} onClick={closeReviewModal}>
            <div
              className={styles.modalContent}
              style={{ maxHeight: "80vh", overflowY: "auto" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <div className={styles.reviewHeader}>
                <img src='/star.png' alt='Star Icon' className={styles.star} />
                <span className={styles.reviewDate}>
                  {new Date(selectedReview.storedDate).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    }
                  )}
                </span>
              </div>
              <div className={styles.userCard}>
                <img src='/userTest.png' alt='User' className={styles.user} />
                <div className={styles.name}>
                  <p>{selectedReview.name}</p>
                  <label>{selectedReview.job}</label>
                </div>
              </div>
              <p className={styles.fullReviewText}>{selectedReview.text}</p>
              <button
                onClick={closeReviewModal}
                className={styles.closeButton2}
              >
                닫기
              </button>
            </div>
          </div>
        )}
        <Footer />
      </main>
    </div>
  );
}
