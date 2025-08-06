import React from 'react'
import ProductItem from './ProductItem';
import Title from '../common/Title';

function Products() {
    const products = [
        { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <section className='bg-light-bg dark:bg-dark-bg-3'>
            <div className='wrapper py-16'>
                <div className='text-center mb-12'>
                    <Title text="Our" color="Products" sortDes="Explore our range of high-quality products designed to meet your needs." />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 p-6">
                    {products.map(product => (
                        <ProductItem />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products