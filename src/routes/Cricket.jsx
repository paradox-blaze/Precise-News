import React from 'react';
import NewsGrid from '../components/NewsGrid';

const Cricket = () => {
    return (
        <>
            <NewsGrid apitype={'top-headlines?country=in&category=sports&q=cricket'}/>
        </>
    )
}

export default Cricket
