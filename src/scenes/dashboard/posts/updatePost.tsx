import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

import styles from './addPost.module.css';
import ToastManager from '../../../components/toast/ToastManager';

function UpdatePost() {
  const location = useLocation();
  const { post } = location.state;
  const [title, settitle] = useState(post.title);
  const [content, setcontent] = useState(post.content);

  const navigate = useNavigate();

  const updatePost = async (e) => {
    try {
      e.preventDefault();
      const updatedPost: Post = {
        id: post.id,
        title,
        content,
        // TODO review format - use default for now
        // date: new Date(Date.now()),
      };
      const res = await PostService.update(updatedPost);
      ToastManager.showToast({ label: res.message, variant: res.type });
      navigate('/nieuws');
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>
        Update Nieuwsbericht:
        {post.title}
      </h1>
      <form onSubmit={updatePost}>
        <label htmlFor="title">Titel</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <label htmlFor="content">bericht</label>
        <MDEditor value={content} onChange={(e) => setcontent(e || '')} />

        <button type="submit" value="update Nieuwsbericht">Update nieuwsbericht</button>
      </form>
    </div>
  );
}

export default UpdatePost;