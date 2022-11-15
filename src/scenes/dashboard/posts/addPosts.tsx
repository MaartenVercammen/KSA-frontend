import React, {
  FormEvent, FormEventHandler, lazy, useRef,
} from 'react';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import ToastManager from '../../../components/toast/ToastManager';

import styles from './addPost.module.css';

const PostForm = lazy(() => import('../../../components/forms/postForm'));

function AddPosts() {
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const addPost: FormEventHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await PostService.create(new FormData(form.current!));
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
      <PostForm
        buttonLabel="Toevoegen"
        onSubmit={addPost}
        ref={form}
      />
    </div>
  );
}

export default AddPosts;
