import React from "react";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

async function ImagePage({ params }: { params: { slug: string } }) {
  const newsItemSlug = (await params).slug;
  const newsItem = await getNewsItem(newsItemSlug);

  // If the news item is not found, return a 404 page
  // notFound() is a function that shows the closest not-found.tsx file
  if (!newsItem) notFound();
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
    </div>
  );
}

export default ImagePage;
