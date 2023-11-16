import React from 'react';
import NewsGrid from '../components/NewsGrid';

const International = () => {
    return (
        <>
            <NewsGrid apitype={'top-headlines?country=us&category=technology'} />
        </>
    )
}

export default International
