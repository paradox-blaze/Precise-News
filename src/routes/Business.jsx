import React from 'react';
import NewsGrid from '../components/NewsGrid';

const Business = () => {
    return (
        <>
            <NewsGrid apitype={'top-headlines?country=in&category=business'}/>
        </>
    )
}

export default Business
