import React, { useState } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import { useAlert } from 'react-alert';
import './post.scss';

type Props = {
    post: Post;
    changeTab: (index: number) => void;
};

const UpdatePost = ({ post, changeTab }: Props) => {
    const [title, settitle] = useState(post.title);
    const [content, setcontent] = useState(post.content);

    const alert = useAlert();

    const updatePost = async (e) => {
        e.preventDefault();
        const newpost: Post = {
            id: post.id,
            title: title,
            content: content,
            date: new Date(Date.now()),
        };
        const res = await PostService.updatePost(newpost);
        alert.show(res.data.message);
        changeTab(4);
    };

    return (
        <div className="addPost">
            <h1>Add Post</h1>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                ></input>

                <label htmlFor="content">bericht</label>
                <textarea
                    name="content"
                    rows={25}
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                ></textarea>

                <input type="submit" value="update Post"></input>
            </form>
        </div>
    );
};

export default UpdatePost;