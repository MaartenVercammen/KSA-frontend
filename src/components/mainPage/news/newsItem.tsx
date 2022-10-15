import React from 'react';
import MDEditor from '@uiw/react-md-editor';

type Props = {
  title: string;
  text: string;
  date: string;
};

function NewsItem({ date, title, text }: Props) {
  return (
    <div className="newsItem">
      <h2>{title}</h2>
      <div className="newsItemBody">
        <MDEditor.Markdown
          source={text}
          style={{
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f4901d',
            color: 'white',
          }}
        />
      </div>
      <p className="publishedOn">
        <i>
          published on:
          {date}
        </i>
      </p>
    </div>
  );
}

export default NewsItem;
