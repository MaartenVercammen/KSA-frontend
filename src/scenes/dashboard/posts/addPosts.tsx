import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import ToastManager from '../../../components/toast/ToastManager';
import { Post } from '../../../types';
import styles from './addPost.module.css';

function AddPosts() {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  const navigate = useNavigate();

  const addPost = async (e) => {
    try {
      e.preventDefault();
      const post: Post = {
        title,
        content,
        // TODO review format - use default for now
        // date: new Date(Date.now()),
      };
      const res = await PostService.create(post);
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
      <h1>Voeg nieuws item toe</h1>
      <form onSubmit={addPost}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <label htmlFor="content">bericht</label>
        <MDEditor value={content} onChange={(e) => setcontent(e || '')} />

        <button type="submit">Nieuwsbericht toevoegen</button>
      </form>
    </div>
  );
}

export default AddPosts;
