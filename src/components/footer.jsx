import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-300 dark:text-gray-300 py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <span className="text-sm text-blue dark:text-white text-center md:text-left">
                    &copy; {new Date().getFullYear()} HSCS. All rights reserved.
                </span>
                <div className="mt-2 md:mt-0 flex space-x-4">
                    {/* Example social icons or links */}
                    <a
                        href="#"
                        className="hover:text-black text-blue dark:hover:text-white transition-colors"
                        aria-label="Facebook"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="hover:text-black text-blue dark:hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.044.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;