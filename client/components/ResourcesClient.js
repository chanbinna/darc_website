"use client";

import React, { useState, useEffect } from "react";
import styles from "./NoticeClient.module.css";
import "primeicons/primeicons.css";
import ResourceDetail from "./ResourceDetail";
import SingleResource from "./SingleResourceClient";

const ResourcesClient = ({ isAdmin }) => {
    const [currTab, setCurrTab] = useState("전체");
    const [currentPage, setCurrentPage] = useState(1);
    const [showDetail, setShowDetail] = useState(false);
    const [selectedResource, setSelectedResource] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [searchInput, setSearchInput] = useState(""); // 입력창 상태

    const resourcesPerPage = 5;

    // 자료실을 API에서 가져오기
    useEffect(() => {
        const fetchResources = async () => {
            try {
                console.log("🚀 Fetching resources from API...");
                const response = await fetch("/api/resources");
                const data = await response.json();

                console.log("� API 응답 데이터 (원본):", data);
                console.log("� API 응답 데이터 타입:", typeof data);

                if (response.ok) {
                    if (Array.isArray(data)) {
                        setResources(data);
                        console.log("✅ resources 상태 업데이트 완료:", data);
                    } else {
                        console.error("🚨 API 응답이 배열이 아닙니다:", data);
                        setError("API 응답이 잘못되었습니다.");
                    }
                } else {
                    setError(data.error || "자료실을 불러오는 중 오류가 발생했습니다.");
                }
            } catch (error) {
                console.error("🚨 Fetch Error:", error);
                setError("서버와의 통신 중 오류가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    const stripHtml = (html) => {
        return html
            .replace(/<(img|script|style|meta|link)[^>]*?>/gi, "") // 이미지 및 특정 태그 제거
            .replace(/(src|href|alt|title|content)=["'][^"']*["']/gi, "") // 속성 제거
            .replace(/<[^>]+>/g, "") // 남은 태그 제거
            .replace(/&nbsp;/gi, " ") // HTML 엔티티 제거
            .replace(/\s+/g, " ") // 공백 정리
            .trim();
    };

    const filteredData = resources.filter((notice) => {
        const tabMatch =
            currTab === "전체" || notice.category.trim() === currTab.trim();

        const cleanContent = stripHtml(notice.content);
        const searchMatch =
            notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cleanContent.toLowerCase().includes(searchTerm.toLowerCase());

        return tabMatch && searchMatch;
    });

    console.log("📌 필터링된 데이터:", filteredData);

    const totalPages = Math.max(
        Math.ceil(filteredData.length / resourcesPerPage),
        1
    );
    const startIndex = (currentPage - 1) * resourcesPerPage;
    const paginatedResources =
        Array.isArray(filteredData) && filteredData.length > 0
            ? filteredData.slice(startIndex, startIndex + resourcesPerPage)
            : [];

    console.log("📌 resources:", resources);
    console.log("📌 filteredData:", filteredData);
    console.log("📌 paginatedResources:", paginatedResources);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    //     setError(null); // Reset error message on search input change
    //     setCurrentPage(1); // Reset to first page on search
    // };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value); // 검색창에는 실시간 반영
    };

    const handleSearchButtonClick = () => {
        setSearchTerm(searchInput);     // 버튼 눌렀을 때만 필터 적용
        setError(null);
        setCurrentPage(1);
    };

    return (
        <div className={styles.noticeContainer}>
            {!showDetail ? (
                <>
                    <div className={styles.topContainer}>
                        <div className={styles.tabContainer}>
                            {["전체", "언론보도", "출판물", "교육자료", "기타"].map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        className={`${styles.tab} ${currTab === tab ? styles.active : ""
                                            }`}
                                        onClick={() => setCurrTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                )
                            )}
                        </div>

                        <div className={styles.tabDropdownContainer}>
                            <select
                                value={currTab}
                                onChange={(e) => setCurrTab(e.target.value)}
                                className={styles.tabDropdown}
                            >
                                {["전체", "이벤트", "업데이트", "서비스", "공고", "기타"].map((tab) => (
                                    <option key={tab} value={tab}>
                                        {tab}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* ✅ 모바일 검색 입력창 (애니메이션 포함) */}
                        {showMobileSearch && (
                            <div className={styles.mobileSearchContainer}>
                                <input
                                    className={styles.mobileSearchInput}
                                    type="text"
                                    placeholder="검색어를 입력하세요."
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearchButtonClick();
                                            setShowMobileSearch(false);
                                        }
                                    }}
                                    autoFocus
                                />
                            </div>
                        )}

                        <div className={styles.mobileSearchButton} onClick={() => setShowMobileSearch(!showMobileSearch)}>
                            <i className="pi pi-search" style={{ color: "black" }} />
                        </div>

                        <div className={styles.searchContainer}>
                            <input
                                className={styles.searchInput}
                                type="text"
                                placeholder="검색어를 입력하세요."
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSearchButtonClick();
                                    }
                                }}
                            />
                            <button className={styles.searchButton}
                                onClick={handleSearchButtonClick}>
                                <i className="pi pi-search" style={{ color: "black" }} />
                            </button>
                        </div>
                    </div>

                    {searchTerm && (
                        <div className={styles.searchResultInfo}>
                            <span>
                                <strong>&quot;{searchTerm}&quot;</strong> 검색결과입니다.
                            </span>
                            <button
                                className={styles.resetButton}
                                onClick={() => {
                                    setSearchInput("");
                                    setSearchTerm("");
                                    setCurrentPage(1);
                                }}
                            >
                                전체 목록 보기
                            </button>
                        </div>
                    )}

                    {loading ? (
                        <p className={styles.loadingMessage}>자료실을 불러오는 중...</p>
                    ) : error ? (
                        <p className={styles.errorMessage}>{error}</p>
                    ) : paginatedResources.length === 0 ? (
                        <p className={styles.emptyMessage}>등록된 자료가 없습니다.</p>
                        // ) : filteredData.length !== 0 ? (
                        //     <ul className={styles.noticeList}>
                        //         {filteredData.map((resource) => (
                        //             <SingleResourceClient
                        //                 key={resource.id} notice={resource}
                        //             />
                        //         ))}
                        //     </ul>
                    ) : (
                        <ul className={styles.noticeList}>
                            {paginatedResources.map((resource) => (
                                <SingleResource
                                    key={resource.id} notice={resource} searchTerm={searchTerm}
                                />
                            ))}
                        </ul>
                    )}

                    <div className={styles.paginationContainer}>
                        <button
                            className={styles.paginationButton}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className="pi pi-chevron-left" style={{ color: "black" }} />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`${styles.paginationButton} ${currentPage === i + 1 ? styles.active : ""
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className={styles.paginationButton}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <i className="pi pi-chevron-right" style={{ color: "black" }} />
                        </button>
                    </div>
                </>
            ) : (
                <ResourceDetail
                    selectedResource={selectedResource}
                    setShowDetail={setShowDetail}
                    setSelectedResource={setSelectedResource}
                    setResources={setResources}
                    isAdmin={isAdmin}
                />
            )}
        </div>
    );
};

export default ResourcesClient;
