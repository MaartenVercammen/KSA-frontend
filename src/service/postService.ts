import axios from 'axios';
import { instance, instanceFile } from '../axios';
import { Post } from '../types';

const uploadPost = (data: Post) => instance.post<{ type: string; message: string }>('/post', data);

const getPosts = () => instance.get<Post[]>('/post');

const deletePost = (id: number) =>
    instance.delete<{ type: string; message: string }>('/post?id=' + id);

const updatePost = () => instance.put('/post');

const PostService = {
    uploadPost,
    getPosts,
    deletePost,
    updatePost,
};

export default PostService;
