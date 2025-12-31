
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import EntertainmentCarousel from './components/EntertainmentCarousel';
import Footer from './components/Footer';

// Import local assets
import img1 from './components/assets/1.jpg';
import img2 from './components/assets/2.jpg';
import img3 from './components/assets/3.jpeg';
import img4 from './components/assets/4.jpeg';
import img5 from './components/assets/5.jpeg';
import img55 from './components/assets/55.jpeg';
import img7 from './components/assets/7.jpeg';
import img8 from './components/assets/8.jpeg';
import img9 from './components/assets/9.jpeg';

const App = () => {
    // Basic products data needed for Hero and Grid
    const products = [
        {
            id: 'iphone-16-pro',
            name: 'iPhone 16 Pro',
            tagline: 'Built for Apple Intelligence.',
            image: img1,
            link: '#',
            theme: 'light',
            isLarge: true,
            category: 'iPhone'
        },
        {
            id: 'airpods-pro-3',
            name: 'AirPods Pro 3',
            tagline: 'Pro-level Active Noise Cancellation.',
            image: img2,
            link: '#',
            theme: 'light',
            isLarge: true,
            category: 'AirPods'
        },
        {
            id: 'watch-s11',
            name: 'WATCH',
            tagline: 'SERIES 11',
            description: 'Built for the great outdoors. And the great indoors.',
            image: img3,
            link: '#',
            theme: 'light',
            isLarge: true,
            category: 'Watch'
        },
        {
            id: 'ipad-air',
            name: 'iPad air',
            tagline: 'Light. Bright. Full of might.',
            image: img4,
            link: '#',
            theme: 'light',
            category: 'iPad'
        },
        {
            id: 'macbook-air',
            name: 'MacBook Air',
            tagline: 'Lean. Mean. AI machine.',
            image: img55,
            link: '#',
            theme: 'light',
            category: 'Mac'
        },
        {
            id: 'ipad',
            name: 'iPad',
            tagline: 'Lovable. Drawable. Magical.',
            image: img5,
            link: '#',
            theme: 'light',
            category: 'iPad'
        },
        {
            id: 'homepod-mini',
            name: 'HomePod mini',
            tagline: 'Room-filling sound.',
            image: img7,
            link: '#',
            theme: 'light',
            category: 'TV & Home'
        },
        {
            id: 'trade-in',
            name: 'Trade In',
            tagline: 'Get $180–$650 in credit when you trade in iPhone 11 or newer.',
            image: img8,
            link: '#',
            theme: 'light',
            category: 'iPhone'
        },
        {
            id: 'apple-card',
            name: 'Card',
            tagline: 'Get up to 3% Daily Cash back with every purchase.',
            image: img9,
            link: '#',
            theme: 'light',
            category: 'Accessories'
        }
    ];

    const largeProducts = products.filter(p => p.isLarge);
    const smallProducts = products.filter(p => !p.isLarge);

    return (
        <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
            <Navbar products={products} />

            <main className="flex-grow">
                <div className="pt-12">
                    {largeProducts.map((product) => (
                        <Hero
                            key={product.id}
                            product={product}
                        />
                    ))}
                    <ProductGrid
                        products={smallProducts}
                    />
                    <EntertainmentCarousel />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default App;
