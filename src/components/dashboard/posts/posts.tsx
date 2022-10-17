import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useNavigate } from 'react-router-dom';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import NewsItem from '../../mainPage/news/newsItem';
import './post.css';

function Posts() {
  const [posts, setposts] = useState<Post[]>([]);

  const alert = useAlert();
  const navigate = useNavigate();

  const getPosts = async () => {
    const res = await PostService.getPosts();
    setposts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (index: number) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Delete post')) {
      const res = await PostService.deletePost(index);
      getPosts();
      alert.show(res.data.message);
    }
  };

  const updatePost = (post: Post) => {
    navigate('/nieuws/update', { state: { post } });
  };

  return (
    <div className="posts-dashboard">
      <h1>Nieuwsberichten</h1>
      <div className="news" id="news">
        <ul>
          {posts
                        && posts.map(({
                          id, title, content, date,
                        }: Post) => (
                          <li key={id} className="posts-conatainer">
                            <NewsItem
                              title={title}
                              date={new Date(date).toLocaleDateString()}
                              text={content}
                            />
                            <div className="news-control-container">
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
                          </li>
                        ))}
        </ul>
      </div>
      <div className="button-container">
        <button type="button" onClick={() => navigate('/nieuws/create')}>Add Nieuwsbericht</button>
      </div>
    </div>
  );
}

export default Posts;
