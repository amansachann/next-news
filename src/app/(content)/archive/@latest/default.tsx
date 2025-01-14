import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestNewsPage = () => {
  const news = getLatestNews();
  return (
    <>
      <h2>LatestNewsPage</h2>;
      <NewsList news={news} />
    </>
  );
};

export default LatestNewsPage;
