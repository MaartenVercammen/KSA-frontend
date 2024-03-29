import React, { useState, useEffect } from 'react';
import NewsItem from './newsItem';
import './news.css';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

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
    <div className="news" id="news">
      <h1>News</h1>
      <ul>
        {news
                    && news.map(({
                      id, title, content, date,
                    }) => (
                      <li key={id}>
                        <NewsItem
                          title={title}
                          date={new Date(date).toLocaleDateString()}
                          text={content}
                        />
                      </li>
                    ))}
      </ul>
    </div>
  );
}

export default News;
