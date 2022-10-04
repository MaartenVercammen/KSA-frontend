import React from 'react';
import parse from 'html-react-parser';

type Props = {
    title: string;
    text: string;
    date: string;
};

const NewsItem: React.FC<Props> = ({ date, title, text }: Props) => {
    return (
        <div className="newsItem">
            <h2>{title}</h2>
            <div className="newsItemBody">
                <div>
                    <p>{parse(text)}</p>
                </div>
            </div>
            <p className="publishedOn">
                <i>published on:{date}</i>
            </p>
        </div>
    );
};

export default NewsItem;
