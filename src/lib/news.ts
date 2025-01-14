import { DUMMY_NEWS } from "../../dummy-news";
import sql from "better-sqlite3";

const db = sql("data.db");

interface NewsItem {
  id: string;
  slug: string;
  image: string;
  title: string;
}

export function getAllNews(): NewsItem[] {
  const news = db.prepare("SELECT * FROM news").all();
  return news as NewsItem[];
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  return DUMMY_NEWS.reduce(
    (years: number[], news: { date: string | number | Date }) => {
      const year = new Date(news.date).getFullYear();
      if (!years.includes(year)) {
        years.push(year);
      }
      return years;
    },
    []
  ).sort((a: number, b: number) => b - a);
}

export function getAvailableNewsMonths(year: string | number) {
  return DUMMY_NEWS.reduce(
    (months: number[], news: { date: string | number | Date }) => {
      const newsYear = new Date(news.date).getFullYear();
      if (newsYear === +year) {
        const month = new Date(news.date).getMonth();
        if (!months.includes(month)) {
          months.push(month + 1);
        }
      }
      return months;
    },
    []
  ).sort((a: number, b: number) => a - b);
}

export function getNewsForYear(year: string | number) {
  return DUMMY_NEWS.filter(
    (news: { date: string | number | Date }) =>
      new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(
  year: string | number,
  month: string | number
) {
  return DUMMY_NEWS.filter((news: { date: string | number | Date }) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
