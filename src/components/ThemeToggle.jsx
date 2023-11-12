import React, { useState } from 'react';
import useDarkSide from './useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function ThemeToggle() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(colorTheme === 'light');

    const toggleDarkMode = checked => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <div>
                <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={22} className="duration-200" />
            </div>
        </>
    );
}