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
    <div className={styles.item}>
      <h2>{title}</h2>
      <div className={styles.body}>
        <div>
          <MDEditor.Markdown
            source={text}
            style={{
              whiteSpace: 'pre-wrap',
              backgroundColor: '#f4901d',
              color: 'white',
            }}
          />
        </div>
      </div>
      <p className={styles.publishedOn}>
        <i>
          published on:
          {date}
        </i>
      </p>
    </div>
  );
}

export default NewsItem;
