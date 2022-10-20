import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useLocation, useNavigate } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import PostService from '../../../service/postService';
import { Post } from '../../../types';

import styles from './addPost.module.css';

function UpdatePost() {
  const location = useLocation();
  const { post } = location.state;
  const [title, settitle] = useState(post.title);
  const [content, setcontent] = useState(post.content);

  const alert = useAlert();
  const navigate = useNavigate();

  const updatePost = async (e) => {
    e.preventDefault();
    const newpost: Post = {
      id: post.id,
      title,
      content,
      date: new Date(Date.now()),
    };
    const res = await PostService.updatePost(newpost);
    alert.show(res.data.message);
    navigate('/nieuws');
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
