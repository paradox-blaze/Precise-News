import React from 'react';
import wordleLogo from './wordle_logo-removebg-preview.png';

// Example React component for the "Wordle" title
const WordleLogo = () => (
    <div>
        {/* Your Wordle logo component JSX */}
        <img height='35px' width='35px' src={wordleLogo} alt="Wordle Logo" />
    </div>
);

export const NavItems = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Business',
        href: '/business'
    },
    {
        title: 'Technology',
        href: '/technology'
    },
    {
        title: 'US',
        href: '/us'
    },
    {
        title: 'Sports',
        href: '/sports'
    },
    {
        // Example: Using a React component for the "Wordle" title
        ReactComponent: <WordleLogo />,
        href: '/wordle'
    }
];
