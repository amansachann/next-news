import Link from 'next/link';
import React from 'react'

const NewsList = ({ news }: { news: Array<{ id: string; slug: string; image: string; title: string }> }) => {
  return (
    <>
      <ul className="news-list">
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link> 
          </li>
        ))} 
      </ul>
    </>
  );
}

export default NewsList