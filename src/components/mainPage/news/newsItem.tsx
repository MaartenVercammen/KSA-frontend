import React from 'react';
import MDEditor from '@uiw/react-md-editor';

import styles from './newsItem.module.css';

type Props = {
  title: string;
  text: string;
  date: string;
};

function NewsItem({ date, title, text }: Props) {
  return (
    <article className={styles.item}>
      <h2>{title}</h2>
      <MDEditor.Markdown source={text} />
      <time>{date}</time>
    </article>
  );
}

export default NewsItem;
