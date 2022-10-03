import React, { useState, useEffect } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import NewsItem from '../../mainPage/news/newsItem';
import './post.scss';

type Props = {
    changeTab: (index: number, ...args) => void;
};

const Posts = ({ changeTab }: Props) => {
    const [posts, setposts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const res = await PostService.getPosts();
        setposts(res.data);
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
                                <li key={id}>
                                    <NewsItem
                                        title={title}
                                        date={new Date(date).toLocaleDateString()}
                                        text={content}
                                    />
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
