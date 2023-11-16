import React from 'react'
import NewsGrid from '../components/NewsGrid'
const Sports = () => {
  return (
    <>
       <NewsGrid apitype={'top-headlines?country=us&category=sports'} />
    </>
  )
}

export default Sports
