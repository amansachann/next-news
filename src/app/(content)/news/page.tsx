"use client";
import React, { useEffect, useState } from "react";
// import { DUMMY_NEWS } from "../../../../dummy-news";
import NewsList from "@/components/news-list";

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    async function fetchNews() {
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
      }
      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    }
    fetchNews();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
