import React, { useState, useEffect, lazy } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

import styles from './posts.module.css';

const NewsItem = lazy(() => import('../../mainPage/news/newsItem'));

function Posts() {
  const [news, setNews] = useState<Post[]>([]);

  const alert = useAlert();
  const navigate = useNavigate();

  const getPosts = async () => {
    const res = await PostService.getAll();
    setNews(res);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (post: Post) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete post')) {
      const res = await PostService.remove(post);
      getPosts();
      alert.show(res.message);
    }
  };

  const updatePost = (post: Post) => {
    navigate('/nieuws/update', { state: { post } });
  };

  return (
    <div className={styles.container}>
      <h1>Nieuwsberichten</h1>
      <div className={styles.grid}>
        {news
          && news.map((post) => (
            <>
              <NewsItem
                key={post.id}
                title={post.title}
                date={new Date(post.date!).toLocaleDateString()}
                text={post.content}
              />
              <div className={styles['news-control-container']}>
                <button type="button" onClick={() => deletePost(post)}>
                  Delete Nieuwsbericht
                </button>
                <button
                  type="button"
                  onClick={() => updatePost(post)}
                >
                  Update Nieuwsbericht
                </button>
              </div>
            </>
          ))}
      </div>
      <div className={styles['button-container']}>
        <button type="button" onClick={() => navigate('/nieuws/create')}>Add Nieuwsbericht</button>
      </div>
    </div>
  );
}

export default Posts;
