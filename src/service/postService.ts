import { instance } from '../axios';
import { Post } from '../types';

const uploadPost = (data: Post) => instance.post<{ type: string; message: string }>('/post', data);

const getPosts = () => instance.get<Post[]>('/post');

const deletePost = (id: number) => instance.delete<{ type: string; message: string }>(`/post?id=${id}`);

const updatePost = (post: Post) => instance.put('/post', post);

const PostService = {
  uploadPost,
  getPosts,
  deletePost,
  updatePost,
};

export default PostService;
