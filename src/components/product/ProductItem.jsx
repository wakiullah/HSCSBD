import React from 'react'
import { Button } from '../ui/button';

function ProductItem() {
    return (
        <div className="relative bg-white dark:bg-dark-bg-2 rounded-xl border border-cyan-400/40 p-6 shadow-lg max-w-sm mx-auto flex flex-col items-left text-left transition-transform hover:scale-[104%] hover:shadow-xl ">
            <div className="flex justify-left mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="12" fill="#1E293B" />
                    <circle cx="24" cy="24" r="10" fill="#06B6D4" />
                    <rect x="18" y="18" width="12" height="12" rx="3" fill="#A5B4FC" />
                    <circle cx="24" cy="24" r="4" fill="#FBBF24" />
                </svg>
            </div>
            {/* Title */}
            <h2 className="text-2xl font-bold text-white mb-2">CapCut PC</h2>
            {/* Subtitle */}
            <p className="text-base text-gray-300 mb-4">High-precision real-time kinematic GPS surveying with centimeter-level accuracy</p>
            {/* Price */}
            <div className="text-cyan-400 text-4xl font-bold mb-1">৳200</div>
            <div className="text-gray-400 mb-4">per acre</div>
            {/* Features */}
            <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center text-gray-200 text-base">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                    No subscription fees
                </li>
                <li className="flex items-center text-gray-200 text-base">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                    Personal Account
                </li>
                <li className="flex items-center text-gray-200 text-base">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                    Monthly gratuitous updates
                </li>
                <li className="flex items-center text-gray-200 text-base">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                    Multi-constellation support
                </li>
                <li className="flex items-center text-gray-200 text-base">
                    <span className="inline-block w-2 h-2 rounded-full bg-lime-400 mr-2"></span>
                    Digital field books
                </li>
            </ul>
            {/* Action Button */}
             <Button className='bg-blue hover:backdrop-brightness-75'> Order Now</Button>
        </div>
    );
}

export default ProductItem