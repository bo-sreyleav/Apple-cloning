
import React, { useRef, useEffect, useState } from 'react';

// Import local assets
import ent1 from './assets/1960x1044sr.jpg';
import ent2 from './assets/1960x1044sr (1).jpg';
import ent3 from './assets/1960x1044sr (2).jpg';
import ent4 from './assets/1960x1044sr (3).jpg';
import ent5 from './assets/1960x1044sr (4).jpg';
import ent6 from './assets/1960x1044sr (5).jpg';
import ent7 from './assets/1960x1044sr (6).jpg';

const shows = [
    {
        id: 1,
        title: "Ted Lasso",
        genre: "Comedy",
        image: ent1,
        description: "Believe in hope."
    },
    {
        id: 2,
        title: "F1 The Movie",
        genre: "Action",
        image: ent2,
        description: "Speed. Precision. Glory."
    },
    {
        id: 3,
        title: "The Morning Show",
        genre: "Drama",
        image: ent3,
        description: "The truth comes out."
    },
    {
        id: 4,
        title: "Severance",
        genre: "Thriller",
        image: ent4,
        description: "Work is life."
    },
    {
        id: 5,
        title: "Foundation",
        genre: "Sci-Fi",
        image: ent5,
        description: "The empire must fall."
    },
    {
        id: 6,
        title: "Masters of the Air",
        genre: "Action",
        image: ent6,
        description: "Brotherhood in the sky."
    },
    {
        id: 7,
        title: "Argylle",
        genre: "Thriller",
        image: ent7,
        description: "The spy that stayed in."
    }
];

const EntertainmentCarousel = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused && scrollRef.current) {
                const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
                const step = window.innerWidth >= 768 ? 696 : window.innerWidth * 0.92 + 16;
                let nextScroll = scrollLeft + step;
                if (nextScroll >= scrollWidth - offsetWidth) {
                    nextScroll = 0;
                }
                scrollRef.current.scrollTo({
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            className="py-16 bg-[#f5f5f7] overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-[1200px] mx-auto px-4 mb-10">
                <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight text-center mb-8">Endless entertainment.</h2>
            </div>

            <div
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto px-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
                {shows.map((show) => (
                    <div
                        key={show.id}
                        className="flex-shrink-0 w-[92vw] md:w-[700px] snap-center group relative cursor-pointer"
                    >
                        <div className="relative aspect-video overflow-hidden rounded-[24px] shadow-sm transition-all duration-700 ease-out">
                            <img
                                src={show.image}
                                alt={show.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                            <div className="absolute bottom-10 left-10 flex items-center space-x-6">
                                <button className="bg-white text-black px-6 py-2.5 rounded-full text-[15px] font-bold hover:bg-zinc-100 transition-colors shadow-sm">
                                    Stream now
                                </button>
                                <div className="flex items-center text-white space-x-2">
                                    <span className="text-[17px] font-semibold">{show.genre}</span>
                                    <span className="opacity-60">•</span>
                                    <span className="text-[17px] opacity-90">{show.description}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex-shrink-0 w-8 md:w-[20vw]" />
            </div>
        </section>
    );
};

export default EntertainmentCarousel;
