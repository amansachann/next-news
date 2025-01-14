"use client";
import React from "react";
import { DUMMY_NEWS } from "../../../../../../../dummy-news";
import { notFound, useRouter } from "next/navigation";

function InterceptedImagePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  // If the news item is not found, return a 404 page
  // notFound() is a function that shows the closest not-found.tsx file
  if (!newsItem) notFound();
  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;
