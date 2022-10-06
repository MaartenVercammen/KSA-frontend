import React, { useState, useEffect } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import NewsItem from '../../mainPage/news/newsItem';
import './post.scss';
import { useAlert } from 'react-alert';

type Props = {
    changeTab: (index: number, ...args) => void;
};

const Posts = ({ changeTab }: Props) => {
    const [posts, setposts] = useState<Post[]>([]);

    const alert = useAlert();

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const res = await PostService.getPosts();
        setposts(res.data);
    };

    const deletePost = async (index: number) => {
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
        <div className="posts-dashboard">
            <h1>Posts</h1>
            <div className="news" id="news">
                <ul>
                    {posts &&
                        posts.map(({ id, title, content, date }: Post) => {
                            console.log(new Date(date).toLocaleDateString());
                            return (
                                <li key={id} className="posts-conatainer">
                                    <NewsItem
                                        title={title}
                                        date={new Date(date).toLocaleDateString()}
                                        text={content}
                                    />
                                    <div className="news-control-container">
                                        <button onClick={(e) => deletePost(id)}>Delete post</button>
                                        <button
                                            onClick={(e) =>
                                                updatePost({
                                                    id: id,
                                                    title: title,
                                                    content: content,
                                                    date: date,
                                                })
                                            }
                                        >
                                            Update post
                                        </button>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="button-container">
                <button onClick={(e) => changeTab(5)}>Add Post</button>
            </div>
        </div>
    );
};

export default Posts;
