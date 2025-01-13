import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const FilteredNewsPage = ({ params }: { params: { year: string } }) => {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList  news={news} />;
};

export default FilteredNewsPage;
