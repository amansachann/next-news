import React from "react";
import { DUMMY_NEWS } from "../../../../dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const NewsDetailPage = async ({ params }: { params: { slug: string } }) => {
  const newsSlug = (await params).slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);

  // If the news item is not found, return a 404 page
  // notFound() is a function that shows the closest not-found.tsx file
  if (!newsItem) notFound();
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem?.slug}/image`}>
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
};

export default NewsDetailPage;
