import Footer from '@/components/footer'
import Hero from '@/components/Hero'
import AllProducts from '@/components/product/AllProducts'
import Products from '@/components/product/TopSellingProducts'
import React from 'react'

function Home() {
    return (
        <>
            <Hero />
            <Products />
            <AllProducts />
            <Footer />
        </>
    )
}

export default Home