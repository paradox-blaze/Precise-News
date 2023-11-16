import React from 'react';
import NewsGrid from '../components/NewsGrid';

const Home = () => {
  return (
    <>
      <NewsGrid apitype={'top-headlines?country=in'}/>
    </>
  )
}

export default Home
