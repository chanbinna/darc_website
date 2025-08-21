"use client";
import React, { useEffect, useState } from "react";
import Navigation from "../../../components/navigation";
import styles from "./review.module.css";
import Link from "next/link";
import YouTube from "react-youtube"; // Import react-youtube
import Footer from "../../../components/footer";
import ScrollToTop from "../../../components/ScrollToTop";

export default function Review() {
  const [videos, setVideos] = useState([]);
  const [filterOption, setFilterOption] = useState("모두");
  const [selectedVideo, setSelectedVideo] = useState(null); // For the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const VIDEOS_PER_PAGE = 12; // Number of videos per page

  useEffect(() => {
    fetchVideos().catch((error) => console.error("Failed to fetch videos."));
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch("/api/youtube-videos");
      const data = await response.json();
      if (response.ok) {
        const sortedVideos = data.videos.sort(
          (a, b) => new Date(b.storedDate) - new Date(a.storedDate)
        );
        setVideos(sortedVideos);
      } else {
        console.error("Failed to fetch videos");
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname === "www.youtube.com") {
      return urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    }
    return null;
  };

  const getThumbnailUrl = (url) => {
    const videoId = extractVideoId(url);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  const filterVideos = () => {
    const now = new Date();
    let filteredVideos = videos;

    if (filterOption === "오늘") {
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate.toDateString() === now.toDateString();
      });
    } else if (filterOption === "이번주") {
      const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay()));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= startOfWeek;
      });
    } else if (filterOption === "이번달") {
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= startOfMonth;
      });
    } else if (filterOption === "3달이내") {
      const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= threeMonthsAgo;
      });
    } else if (filterOption === "6달이내") {
      const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
      filteredVideos = videos.filter((video) => {
        const videoDate = new Date(video.storedDate);
        return videoDate >= sixMonthsAgo;
      });
    }
    return filteredVideos;
  };

  const totalVideos = filterVideos().length;

  // Get the videos for the current page
  const indexOfLastVideo = currentPage * VIDEOS_PER_PAGE;
  const indexOfFirstVideo = indexOfLastVideo - VIDEOS_PER_PAGE;
  const currentVideos = filterVideos().slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(filterVideos().length / VIDEOS_PER_PAGE);

  // Scroll to the top whenever the current page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // YouTube options for the player
  const youtubeOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0, // Auto-play the video when the modal opens
    },
  };

  return (
    <div className={styles["main-container"]}>
      <main className={styles.main}>
        <ScrollToTop />
        <Navigation />
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>
              <h1>다르크 이야기</h1>
            </div>
            <div className={styles.link}>
              <Link href='/'>홈</Link>
              <p>&gt;</p>
              <Link href='/review'>
                <h4>다르크 이야기</h4>
              </Link>
            </div>
          </div>
          <div className={styles.videoSection}>
            <div className={styles.controlsContainer}>
              <div className={styles.leftAlignedControls}>
                {/* can you make me the text here which shows something like 'Total 3건 1페이지' which shows total number and page number?*/}
                <p>{`Total ${totalVideos}건 ${currentPage}페이지`}</p>
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

            {/* Display the current page videos */}
            <div className={styles.videoList}>
              {currentVideos.map((video) => {
                const videoDate = new Date(video.storedDate);
                const today = new Date();
                const isToday =
                  videoDate.toDateString() === today.toDateString();
                const formattedDate = isToday
                  ? videoDate.toLocaleString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : videoDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });

                return (
                  <div
                    key={video._id}
                    className={styles.videoItem}
                    onClick={() => openVideoModal(video)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <div className={styles.videoContainer}>
                      <img
                        src={getThumbnailUrl(video.videoUrl)}
                        alt={video.name}
                        className={styles.thumbnail}
                      />
                    </div>
                    <div className={styles.videoDetails}>
                      <div className={styles.videoNameRow}>
                        <span className={styles.videoName}>{video.name}</span>
                      </div>
                      <span className={styles.videoDate}>{formattedDate}</span>
                    </div>
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

        {/* Video Modal */}
        {isModalOpen && selectedVideo && (
          <div className={styles.modal} onClick={closeModal}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
            >
              <div className={styles.videoContainer2}>
                <YouTube
                  videoId={extractVideoId(selectedVideo.videoUrl)}
                  opts={youtubeOptions}
                />
              </div>
              <div className={styles.videoDetails}>
                <div className={styles.videoNameRow}>
                  <span className={styles.videoName}>{selectedVideo.name}</span>
                </div>
                {/* Add formatted date */}
                <span className={styles.videoDate}>
                  {new Date(selectedVideo.storedDate).toLocaleDateString(
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
              <button onClick={closeModal} className={styles.closeButton}>
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
