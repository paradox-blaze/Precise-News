import React from 'react'
import { NavItems } from '../data/NavItems';
import { useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import wordleLogo from './wordle_logo-removebg-preview.png';
import WeatherComponent from './WeatherComponent';


const Navbar = () => {
    let path = useLocation().pathname;
    return (
        <div className='border-b border-gray-600 shadow-xl backdrop-blur-lg  px-8 py-2 flex text-black dark:text-white items-center justify-between fixed w-full z-10'>
            <a href="/"><h1 className='text-3xl hover:scale-110 duration-300 cursor-pointer font-bold'>PRECISE NEWS</h1></a>
            <ul className='flex space-x-6 font-semibold items-center'>
                {
                    NavItems.map((item, key) => {
                        return (
                            <a href={item.href} key={key}><li className={`cursor-pointer hover:scale-110 duration-300 ${path === item.href ? 'underline underline-offset-4' : ''}`}>{item.title}</li></a>
                        )
                    })
                }
                <li><ThemeToggle /></li>
                <WeatherComponent />
                <a href="http://localhost:7710/"><img height="35px" width="35px" src={wordleLogo} alt="wordle" /></a>
            </ul>
        </div>
    )
}

export default Navbar
