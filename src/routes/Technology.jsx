import React from 'react';
import NewsGrid from '../components/NewsGrid';

const Technology = () => {
    return (
        <>
            <NewsGrid apitype={'top-headlines?country=in&category=technology'} />
        </>
    )
}

export default Technology
