import React from 'react'
import { Button } from '../ui/button';

function ProductItem(props) {
    const { product } = props;

    const { icon, title, subtitle, price, unit, features } = product || {};

    return (
        <div className="relative bg-white dark:bg-dark-bg-2 rounded-xl border border-cyan-400/40 p-6 shadow-lg max-w-sm mx-auto flex flex-col items-left text-left transition-transform hover:scale-[104%] hover:shadow-xl w-full">
            <div className="flex justify-left mb-4">
                <span className="text-5xl text-cyan-600 dark:text-cyan-400">{icon}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4">{subtitle}</p>
            {/* Price */}
            <div className="text-cyan-700 dark:text-cyan-400 text-4xl font-bold mb-1">{price}</div>
            <div className="text-gray-500 dark:text-gray-400 mb-4">{unit}</div>
            {/* Features */}
            <ul className="text-left space-y-2 mb-6">
                {features && features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-200 text-base">
                        <span className="inline-block w-2 h-2 rounded-full bg-lime-500 dark:bg-lime-400 mr-2"></span>
                        {feature}
                    </li>
                ))}
            </ul>
            {/* Action Button */}
            <Button className="bg-cyan-700 hover:bg-cyan-800 text-white dark:bg-blue dark:hover:backdrop-brightness-75">
                Order Now
            </Button>
        </div>
    );
}

export default ProductItem