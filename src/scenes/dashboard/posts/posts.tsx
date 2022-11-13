import React, { useState, useEffect, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

import styles from './posts.module.css';
import ToastManager from '../../../components/toast/ToastManager';

const NewsItem = lazy(() => import('../../mainPage/news/newsItem'));

function Posts() {
  const [news, setNews] = useState<Post[]>([]);

  const navigate = useNavigate();

  const getPosts = async () => {
    try {
      const res = await PostService.getAll();
      setNews(res);
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (post: Post) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete post')) {
      const res = await PostService.remove(post);
      getPosts();
      ToastManager.showToast({ label: res.message, variant: res.type });
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
