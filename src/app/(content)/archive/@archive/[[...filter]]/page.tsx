import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

const FilteredNewsPage = async ({
  params,
}: {
  params: Promise<{ filter: string[] }>;
}) => {
  const filter = (await params).filter;
  if (filter !== undefined && filter.length > 2) {
    throw new Error("Invalid filter");
  }
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = await getAvailableNewsMonths(selectedYear);
  }

  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected period</p>;
  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !(await getAvailableNewsYears()).includes(selectedYear)) ||
    (selectedMonth &&
      !(await getAvailableNewsMonths(selectedYear)).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
