import React, { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';

const NewsGrid = ({ type }) => {
    const [data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
            if (!fetched) {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${type}&apiKey=8f7f4723e41f484ab5f6689a5612a472`);
                const jsonData = await response.json();
                setData(jsonData.articles);
                setFetched(true);
                console.log(data);
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    fetchData();
    return (

        <>
            {
                loading ? (
                    <>
                        <div className='flex justify-center items-center h-screen animate-spin'>
                            <ImSpinner9 size={30} className='text-black dark:text-white' />
                        </div>
                    </>
                ) : (
                    <div className='grid grid-cols-3 gap-y-6 gap-x-4 mx-6 pt-20 pb-8 z-0'>
                        {
                            data
                                .filter(data => data.urlToImage)
                                .map((item, key) => (
                                    <>
                                        <div className='flex flex-col bg-gray-300 dark:bg-gray-700 text-black dark:text-white p-4 rounded-xl space-y-4 hover:scale-105 duration-300' key={key}>
                                            <div className='flex justify-center items-center w-full'>
                                                <img src={item.urlToImage} alt="Image" className='h-[10rem] w-[15rem]' />
                                            </div>
                                            <h1 className='max-w-xl clear-left text-xl font-bold'>{item.title}</h1>
                                            <div>
                                                <p>{item.description}</p>
                                            </div>
                                            <a href={`${item.url}`} target="_blank" className='text-blue-600'>Read More...</a>
                                        </div>
                                    </>
                                ))
                        }
                    </div>
                )
            }
        </>
    )
}

export default NewsGrid;
