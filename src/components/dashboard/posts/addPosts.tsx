import React, { useState } from 'react';
import PostService from '../../../service/postService';
import { Post } from '../../../types';
import { useAlert } from 'react-alert';
import MDEditor from '@uiw/react-md-editor';

type Props = {
    changeTab: (index: number) => void;
};

const AddPosts = ({ changeTab }: Props) => {
    const [title, settitle] = useState('');
    const [content, setcontent] = useState('');

    const alert = useAlert();

    const addpost = async (e) => {
        e.preventDefault();
        const post: Post = { id: -1, title: title, content: content, date: new Date(Date.now()) };
        const res = await PostService.uploadPost(post);
        alert.show(res.data.message);
        changeTab(4);
    };

    return (
        <div className="addPost">
            <h1>Add Post</h1>
            <form onSubmit={addpost}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                ></input>

                <label htmlFor="content">bericht</label>
                <MDEditor value={content} onChange={(e) => setcontent(e || '')} />

                <input type="submit" value="add Post"></input>
            </form>
        </div>
    );
};

export default AddPosts;
