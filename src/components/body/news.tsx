import React from 'react'
import NewsItem from './newsItem'

const News = () => {
  return (
    <div className='news'>
        <h2>News</h2>
        <ul>
          <li><NewsItem title='test'/></li>
          <li><NewsItem title='Hallo'/></li>
          <li><NewsItem title='klaar'/></li>
        </ul>
    </div>
  )
}

export default News