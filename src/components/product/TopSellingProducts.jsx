import React from 'react'
import ProductItem from './ProductItem';
import Title from '../common/Title';

function Products() {
    const products = [
        {
            id: 1,
            name: 'Video Editing Tutorial',
            image: 'https://via.placeholder.com/150',
            title: 'Video Editing Tutorial',
            subtitle: 'Master video editing from scratch with step-by-step lessons and practical examples for beginners.',
            price: 29.99,
            unit: 'per course',
            features: [
                'Comprehensive modules',
                'Hands-on projects',
                'Lifetime access',
                'Certificate included',
                'Beginner friendly'
            ],
            icon: '🎬'
        },
        {
            id: 2,
            name: 'CapCut Pro Subscription',
            image: 'https://via.placeholder.com/150',
            title: 'CapCut Pro Subscription',
            subtitle: 'Unlock all premium CapCut features for advanced video editing and creative content production.',
            price: 59.99,
            unit: 'per year',
            features: [
                'No watermark',
                'Exclusive effects',
                'Priority support',
                'Cloud storage',
                'Regular updates'
            ],
            icon: '✨'
        },
        {
            id: 3,
            name: 'Adobe Subscription',
            image: 'https://via.placeholder.com/150',
            title: 'Adobe Subscription',
            subtitle: 'Access the full suite of Adobe creative tools for professional design, editing, and publishing.',
            price: 14.99,
            unit: 'per month',
            features: [
                'All Adobe apps',
                'Cloud sync',
                'Premium fonts',
                'Stock assets',
                '24/7 support'
            ],
            icon: '🅰️'
        },
    ];

    return (
        <section className='bg-light-bg dark:bg-dark-bg-3'>
            <div className='wrapper py-16'>
                <div className='text-center mb-12'>
                    <Title text="Our" color="Top Selling Products" sortDes="Explore our range of high-quality products designed to meet your needs." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-6">
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products