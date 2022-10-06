import React from 'react';
import parse from 'html-react-parser';
import MDEditor from '@uiw/react-md-editor';

type Props = {
  title: string;
  text: string;
  date: string;
};

const NewsItem: React.FC<Props> = ({ date, title, text }: Props) => (
  <div className="newsItem">
    <h2>{title}</h2>
    <div className="newsItemBody">
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
    <p className="publishedOn">
      <i>
        published on:
        {date}
      </i>
    </p>
  </div>
);

export default NewsItem;
