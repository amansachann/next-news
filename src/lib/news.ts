import sql from "better-sqlite3";

const db = sql("data.db");

interface NewsItem {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
}

export async function getAllNews(): Promise<NewsItem[]> {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem[];
}

export async function getNewsItem(slug: string): Promise<NewsItem> {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem as NewsItem;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews as NewsItem[];
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
  .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years;
}

export function getAvailableNewsMonths(year: string): string[] {
  return db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<NewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem[];
}

export async function getNewsForYearAndMonth(
  year: string,
  month: string
): Promise<NewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news as NewsItem[];
}
