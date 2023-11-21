import React from 'react'
import NewsGrid from '../components/NewsGrid'
const Sports = () => {
  return (
    <>
       <NewsGrid apitype={'top-headlines?country=in&category=sports'} />
    </>
  )
}

export default Sports
