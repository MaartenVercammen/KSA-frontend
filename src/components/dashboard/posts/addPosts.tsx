import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import MDEditor from '@uiw/react-md-editor';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import styles from './addPost.module.css';

function AddPosts() {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  const alert = useAlert();
  const navigate = useNavigate();

  const addPost = async (e) => {
    e.preventDefault();
    const post: Post = {
      title,
      content,
      // TODO review format - use default for now
      // date: new Date(Date.now()),
    };
    const res = await PostService.create(post);
    alert.show(res.message);
    navigate('/nieuws');
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
