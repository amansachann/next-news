import React from "react";
import { notFound } from "next/navigation";
import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

async function InterceptedImagePage({ params }: { params: { slug: string } }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug);

  // If the news item is not found, return a 404 page
  // notFound() is a function that shows the closest not-found.tsx file
  if (!newsItem) notFound();
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </div>
      </dialog>
    </>
  );
}

export default InterceptedImagePage;
