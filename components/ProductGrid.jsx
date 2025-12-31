import React from 'react';

const ProductGrid = ({ products, onShowDetails }) => {
    const handleLearnMore = (product) => {
        if (onShowDetails) {
            onShowDetails(product);
        } else {
            console.log('Learn more clicked for', product.name);
        }
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 pb-3">
            {products.map((product) => (
                <div
                    key={product.id}
                    className={`relative h-[500px] md:h-[580px] flex flex-col items-center justify-start overflow-hidden rounded-sm ${product.theme === 'dark' ? 'bg-black text-white' : 'bg-[#fafafa] text-[#1d1d1f]'}`}
                >
                    <div className="text-center mt-12 z-10 space-y-1.5 px-4 transition-all duration-700">
                        <h3 className="text-[32px] md:text-[40px] font-bold tracking-tight">
                            {product.name}
                        </h3>
                        <p className="text-[17px] md:text-[21px] font-normal max-w-xs mx-auto">
                            {product.tagline}
                        </p>
                        <div className="flex items-center justify-center space-x-6 pt-3">
                            <button
                                onClick={() => handleLearnMore(product)}
                                className="bg-[#0071e3] text-white px-5 py-2 rounded-full text-[15px] font-normal hover:bg-[#0077ed] transition-colors"
                            >
                                Learn more
                            </button>
                            <button
                                onClick={() => console.log('Buy clicked')}
                                className="text-[#0071e3] text-[17px] font-normal hover:underline"
                            >
                                Buy
                            </button>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 top-0 w-full h-full flex items-end justify-center pointer-events-none">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-bottom"
                        />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ProductGrid;
