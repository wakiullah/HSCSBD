import React from 'react'
import ProductItem from './ProductItem';
import Title from '../common/Title';

function AllProducts() {
    const products = [
        {
            id: 1,
            name: 'Tutorials',
            image: 'https://via.placeholder.com/150',
            title: 'Tutorials',
            subtitle: 'Learn new skills with our expertly crafted tutorials for all levels.',
            price: 19.99,
            unit: 'per course',
            features: [
                'Step-by-step guidance',
                'Expert instructors',
                'Lifetime access'
            ],
            icon: '📚'
        },
        {
            id: 2,
            name: 'Digital Products',
            image: 'https://via.placeholder.com/150',
            title: 'Digital Products',
            subtitle: 'Download high-quality digital assets and tools for your projects.',
            price: 9.99,
            unit: 'per item',
            features: [
                'Instant download',
                'Royalty-free',
                'Regular updates'
            ],
            icon: '💾'
        },
        {
            id: 3,
            name: 'Gadget and Gears',
            image: 'https://via.placeholder.com/150',
            title: 'Gadget and Gears',
            subtitle: 'Discover the latest gadgets and essential gear for everyday use.',
            price: 49.99,
            unit: 'starting from',
            features: [
                'Latest technology',
                'Warranty included',
                'Free shipping'
            ],
            icon: '🎧' // Changed to headphone
        },
        {
            id: 4,
            name: 'Video Production',
            image: 'https://via.placeholder.com/150',
            title: 'Video Production',
            subtitle: 'Professional video production services for your business or event.',
            price: 299.99,
            unit: 'per project',
            features: [
                'HD quality',
                'Creative editing',
                'Fast turnaround'
            ],
            icon: '🎥'
        },
        {
            id: 5,
            name: 'Fabrics and Wear',
            image: 'https://via.placeholder.com/150',
            title: 'Fabrics and Wear',
            subtitle: 'Shop stylish fabrics and comfortable wear for every occasion.',
            price: 24.99,
            unit: 'per item',
            features: [
                'Premium materials',
                'Trendy designs',
                'Easy returns'
            ],
            icon: '👗'
        },
        {
            id: 6,
            name: 'Travel and Tours',
            image: 'https://via.placeholder.com/150',
            title: 'Travel and Tours',
            subtitle: 'Explore the world with our curated travel and tour packages.',
            price: 499.99,
            unit: 'per package',
            features: [
                'Custom itineraries',
                'Expert guides',
                '24/7 support'
            ],
            icon: '🌍'
        },
    ];

    return (
        <section className='bg-light-bg dark:bg-dark-bg-2'>
            <div className='wrapper py-16'>
                <div className='text-center mb-12'>
                    <Title text="Our" color="Products" sortDes="Explore our range of high-quality products designed to meet your needs." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllProducts