import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';


function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const setDarkModeHandler = () => {
        setDarkMode((prev) => !prev);
    };
    const NavLinks = ['Products', 'Services', "About"]



    return (
        <nav className="w-full bg-whtie dark:bg-daeken-dark shadow-md fixed top-0 left-0 z-50 transition-colors backdrop-blur-md backdrop-saturate-150 border-b border-white/30 dark:border-gray-800/60">
            <div className="wrapper">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-xl font-bold text-blue-600 dark:text-blue-400">Logo</a>
                    </div>

                    {/* Center: Nav links (hidden on mobile) */}
                    <nav className="hidden md:flex space-x-8 mx-auto">
                        {NavLinks.map((link, i) => (
                            <Button key={i} className={'cursor-pointer mr-1.5'} variant={'ghost'}>{link}</Button>
                        ))}
                    </nav>

                    {/* Right: Auth buttons and theme switch (hidden on mobile) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button className={'cursor-pointer'} variant={'ghost'}>Login</Button>

                        <button
                            onClick={() => setDarkMode((prev) => !prev)}
                            className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {menuOpen && (
                <MobileNav darkMode={darkMode} setDatkMode={setDarkModeHandler} />
            )}
        </nav>
    );
}

export default Nav;