import React from 'react'

type Props = {
    title: string;
}

const NewsItem: React.FC<Props> = ({title}) => {
  return (
    <div className='newsItem'>
        <h3>{title}</h3>
        <div className='newsItemBody'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed ipsum eos labore placeat fugit dolore rerum optio quis hic ratione obcaecati esse dignissimos modi, repudiandae aperiam natus delectus animi.</p>
        </div>
        <i>published on: 2022-2-16</i>
    </div>
  )
}

export default NewsItem