import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import NewsItem from '../../mainPage/news/newsItem';

import styles from './posts.module.css';

type Props = {
  changeTab: (index: number, ...args) => void;
};

function Posts({ changeTab }: Props) {
  const [news, setNews] = useState<Post[]>([]);

  const alert = useAlert();

  const getPosts = async () => {
    const res = await PostService.getPosts();
    setNews(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (index: number) => {
    // TODO: remove confirm
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete post')) {
      const res = await PostService.deletePost(index);
      getPosts();
      alert.show(res.data.message);
    }
  };

  const updatePost = (post: Post) => {
    changeTab(6, post);
  };

  return (
    <div className={styles.container}>
      <h1>Nieuwsberichten</h1>
      <div className={styles.grid}>
        <NewsItem
          key="id"
          title="title"
          date={new Date().toLocaleDateString()}
          text="content"
        />
        <div className={styles['news-control-container']}>
          <button type="button" onClick={() => deletePost(1)}>
            Delete Nieuwsbericht
          </button>
          <button
            type="button"
            onClick={() => updatePost({
              id: 1,
              title: 'title',
              content: '',
              date: new Date(),
            })}
          >
            Update Nieuwsbericht
          </button>
        </div>
        {news
          && news.map(({
            id, title, content, date,
          }) => (
            <>
              <NewsItem
                key={id}
                title={title}
                date={new Date(date).toLocaleDateString()}
                text={content}
              />
              <div className={styles['news-control-container']}>
                <button type="button" onClick={() => deletePost(id)}>
                  Delete Nieuwsbericht
                </button>
                <button
                  type="button"
                  onClick={() => updatePost({
                    id,
                    title,
                    content,
                    date,
                  })}
                >
                  Update Nieuwsbericht
                </button>
              </div>
            </>
          ))}
      </div>
      <div className={styles['button-container']}>
        <button type="button" onClick={() => changeTab(5)}>Add Nieuwsbericht</button>
      </div>
    </div>
  );
}

export default Posts;
