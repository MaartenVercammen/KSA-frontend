import React from 'react'

type Props = {
    title: string;
}

const NewsItem: React.FC<Props> = ({title}) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed ipsum eos labore placeat fugit dolore rerum optio quis hic ratione obcaecati esse dignissimos modi, repudiandae aperiam natus delectus animi.</p>
        <span>Maarten Vercammen</span>
        <i>2022-2-16</i>
    </div>
  )
}

export default NewsItem