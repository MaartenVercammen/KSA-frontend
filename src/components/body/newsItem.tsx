import React from 'react'
import parse from 'html-react-parser'

type Props = {
    title: string;
    content: string;
}

const NewsItem: React.FC<Props> = ({title, content}: Props) => {
  return (
    <div className='newsItem'>
        <h2>{title}</h2>
        <div className='newsItemBody'>
          <p>{parse(content)}</p> </div>
        <p className='publishedOn'><i>published on: 2022-2-16</i></p>
    </div>
  )
}

export default NewsItem