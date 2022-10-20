import React, { useState, useEffect, lazy } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

import styles from './news.module.css';

const NewsItem = lazy(() => import('./newsItem'));

function News() {
  const [news, setnews] = useState<Post[]>([]);

  const getPosts = async () => {
    const res = await PostService.getPosts();
    setnews(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.container} id="news">
      <h1>News</h1>
      <div className={styles.grid}>
        {news
          && news.map(({
            id, title, content, date,
          }) => (
            <NewsItem
              key={id}
              title={title}
              date={new Date(date).toLocaleDateString()}
              text={content}
            />
          ))}
      </div>
    </div>
  );
}

export default News;
