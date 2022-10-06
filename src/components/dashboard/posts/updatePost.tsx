import React, { useState } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import { useAlert } from 'react-alert';
import './post.scss';
import MDEditor from '@uiw/react-md-editor';

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
            <h1>Update Nieuwsbericht: {post.title}</h1>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Titel</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                ></input>

                <label htmlFor="content">bericht</label>
                <MDEditor value={content} onChange={(e) => setcontent(e || '')} />

                <input type="submit" value="update Nieuwsbericht"></input>
            </form>
        </div>
    );
};

export default UpdatePost;
