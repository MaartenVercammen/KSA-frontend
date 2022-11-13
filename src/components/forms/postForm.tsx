import React, { FormEventHandler, ForwardedRef, lazy } from 'react';
import { Post } from '../../types';

type Props = {
  buttonLabel: string,
  onSubmit: FormEventHandler<HTMLFormElement>,
  post?: Post
};

const Input = lazy(() => import('../form/input'));
const MDEditor = lazy(() => import('@uiw/react-md-editor'));

const PostForm = React.forwardRef(
  ({ buttonLabel, onSubmit, post }: Props, form: ForwardedRef<HTMLFormElement>) => {
    const [value, setValue] = React.useState(post?.content);
    return (
      <form onSubmit={onSubmit} ref={form}>
        {post !== undefined && <input type="hidden" name="id" value={post.id} />}
        <Input label="Titel" name="title" required defaultValue={post?.title} />
        <MDEditor textareaProps={{ name: 'content' }} value={value} onChange={(content) => setValue(content)} />
        <button type="submit">{buttonLabel}</button>
      </form>
    );
  },
);

PostForm.defaultProps = {
  post: undefined,
};

export default PostForm;
