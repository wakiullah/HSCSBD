import React from 'react'

function MobileNav(darkMode, setDarkMode) {
    return (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-colors">
            <nav className="flex flex-col space-y-1 px-4 py-4">
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">About</a>
                <a href="#" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">Contact</a>
                <div className="flex space-x-2 mt-4">
                    <button className="flex-1 px-4 py-2 rounded text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium transition">Login</button>
                    <button className="flex-1 px-4 py-2 rounded bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 font-medium transition">Sign Up</button>
                    <button
                        onClick={() => setDarkMode()}
                        className="ml-2 p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex-shrink-0"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                        )}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default MobileNav