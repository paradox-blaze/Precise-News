import React from 'react'
import NewsGrid from '../components/NewsGrid'

const US = () => {
    return (
        <>
            <NewsGrid apitype={'top-headlines?country=us'} />

        </>
    )
}

export default US
