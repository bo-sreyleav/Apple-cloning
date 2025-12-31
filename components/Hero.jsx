import React from 'react';

const Hero = ({ product, onShowDetails }) => {
    const isDark = product.theme === 'dark';

    const handleLearnMore = () => {
        if (onShowDetails) {
            onShowDetails(product);
        } else {
            console.log('Learn more', product.name);
        }
    };

    return (
        <section
            className={`relative h-[650px] md:h-[800px] w-full flex flex-col items-center justify-start overflow-hidden ${isDark ? 'bg-black text-white' : 'bg-white text-[#1d1d1f]'}`}
        >
            <div className="text-center pt-14 md:pt-16 z-10 space-y-1 md:space-y-1 px-4 transition-all duration-700">
                <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight leading-tight">
                    {product.name}
                </h2>
                <p className="text-[19px] md:text-[28px] font-normal">
                    {product.tagline}
                </p>
                <div className="flex items-center justify-center space-x-4 pt-4">
                    <button
                        onClick={handleLearnMore}
                        className="bg-[#0071e3] text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-colors"
                    >
                        Learn more
                    </button>
                    <button
                        onClick={() => console.log('Buy clicked')}
                        className="text-[#0071e3] border border-[#0071e3] px-5 py-2 md:px-6 md:py-2.5 rounded-full text-[17px] font-normal hover:bg-[#0071e3] hover:text-white transition-all"
                    >
                        Buy
                    </button>
                </div>
            </div>

            <div className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none pb-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-bottom"
                />
            </div>
        </section>
    );
};

export default Hero;
