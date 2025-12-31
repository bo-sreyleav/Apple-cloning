
import React, { useState, useRef, useMemo, useEffect } from 'react';

const Navbar = ({ cartCount, onOpenBag, cartItems = [], products }) => {
    const [activeItem, setActiveItem] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const timeoutRef = useRef(null);
    const searchInputRef = useRef(null);

    const navItems = [
        {
            label: 'Store',
            href: 'store',
            sections: [
                { title: 'Shop', links: [{ label: 'Shop the Latest', href: 'store' }, { label: 'Mac', href: 'mac' }, { label: 'iPad', href: 'ipad' }, { label: 'iPhone', href: 'iphone' }, { label: 'Apple Watch', href: 'watch' }, { label: 'Accessories', href: 'accessories' }] },
                { title: 'Quick Links', links: [{ label: 'Find a Store', href: 'store' }, { label: 'Order Status', href: 'support' }, { label: 'Apple Trade In', href: 'store' }, { label: 'Financing', href: 'store' }] }
            ]
        },
        {
            label: 'Mac',
            href: 'mac',
            sections: [
                { title: 'Explore Mac', links: [{ label: 'Explore All Mac', href: 'mac' }, { label: 'MacBook Air', href: 'mac' }, { label: 'MacBook Pro', href: 'mac' }, { label: 'iMac', href: 'mac' }, { label: 'Mac mini', href: 'mac' }, { label: 'Mac Studio', href: 'mac' }] },
                { title: 'Shop Mac', links: [{ label: 'Shop Mac', href: 'store' }, { label: 'Mac Accessories', href: 'accessories' }, { label: 'Financing', href: 'store' }] }
            ]
        },
        {
            label: 'iPad',
            href: 'ipad',
            sections: [
                { title: 'Explore iPad', links: [{ label: 'Explore All iPad', href: 'ipad' }, { label: 'iPad Pro', href: 'ipad' }, { label: 'iPad Air', href: 'ipad' }, { label: 'iPad', href: 'ipad' }, { label: 'iPad mini', href: 'ipad' }] },
                { title: 'Shop iPad', links: [{ label: 'Shop iPad', href: 'store' }, { label: 'iPad Accessories', href: 'accessories' }, { label: 'Apple Pencil', href: 'accessories' }] }
            ]
        },
        {
            label: 'iPhone',
            href: 'iphone',
            sections: [
                { title: 'Explore iPhone', links: [{ label: 'Explore All iPhone', href: 'iphone' }, { label: 'iPhone 17 Pro', href: 'iphone' }, { label: 'iPhone 17', href: 'iphone' }, { label: 'iPhone 16', href: 'iphone' }, { label: 'iPhone 15', href: 'iphone' }, { label: 'iPhone SE', href: 'iphone' }] },
                { title: 'Shop iPhone', links: [{ label: 'Shop iPhone', href: 'store' }, { label: 'iPhone Accessories', href: 'accessories' }, { label: 'Apple Trade In', href: 'store' }, { label: 'Financing', href: 'store' }] }
            ]
        },
        {
            label: 'Watch',
            href: 'watch',
            sections: [
                { title: 'Explore Watch', links: [{ label: 'Explore All Apple Watch', href: 'watch' }, { label: 'Apple Watch Series 10', href: 'watch' }, { label: 'Apple Watch Ultra 2', href: 'watch' }, { label: 'Apple Watch SE', href: 'watch' }] },
                { title: 'Shop Watch', links: [{ label: 'Shop Watch', href: 'store' }, { label: 'Watch Straps', href: 'accessories' }, { label: 'Watch Accessories', href: 'accessories' }] }
            ]
        },
        {
            label: 'Vision',
            href: 'vision',
            sections: [
                { title: 'Explore Vision', links: [{ label: 'Apple Vision Pro', href: 'vision' }] },
                { title: 'Shop Vision', links: [{ label: 'Shop Apple Vision Pro', href: 'store' }, { label: 'Vision Pro Accessories', href: 'accessories' }] }
            ]
        },
        {
            label: 'AirPods',
            href: 'airpods',
            sections: [
                { title: 'Explore AirPods', links: [{ label: 'Explore All AirPods', href: 'airpods' }, { label: 'AirPods Pro 2', href: 'airpods' }, { label: 'AirPods 4', href: 'airpods' }, { label: 'AirPods Max', href: 'airpods' }] },
                { title: 'Shop AirPods', links: [{ label: 'Shop AirPods', href: 'store' }, { label: 'AirPods Accessories', href: 'accessories' }] }
            ]
        },
        {
            label: 'TV & Home',
            href: 'tvhome',
            sections: [
                { title: 'Explore TV & Home', links: [{ label: 'Explore All TV & Home', href: 'tvhome' }, { label: 'Apple TV 4K', href: 'tvhome' }, { label: 'HomePod', href: 'tvhome' }, { label: 'HomePod mini', href: 'tvhome' }] },
                { title: 'Shop TV & Home', links: [{ label: 'Shop TV & Home', href: 'store' }, { label: 'TV & Home Accessories', href: 'accessories' }] }
            ]
        },
        {
            label: 'Entertainment',
            href: 'entertainment',
            sections: [
                { title: 'Explore Entertainment', links: [{ label: 'Explore All Entertainment', href: 'entertainment' }, { label: 'Apple One', href: 'entertainment' }, { label: 'Apple TV+', href: 'entertainment' }, { label: 'Apple Music', href: 'entertainment' }, { label: 'Apple Arcade', href: 'entertainment' }, { label: 'Apple Fitness+', href: 'entertainment' }] }
            ]
        },
        {
            label: 'Accessories',
            href: 'accessories',
            sections: [
                { title: 'Shop Accessories', links: [{ label: 'Shop All Accessories', href: 'accessories' }, { label: 'Mac', href: 'accessories' }, { label: 'iPad', href: 'accessories' }, { label: 'iPhone', href: 'accessories' }, { label: 'Apple Watch', href: 'accessories' }] }
            ]
        },
        {
            label: 'Support',
            href: 'support',
            sections: [
                { title: 'Explore Support', links: [{ label: 'iPhone Support', href: 'support' }, { label: 'Mac Support', href: 'support' }, { label: 'iPad Support', href: 'support' }, { label: 'Watch Support', href: 'support' }, { label: 'Apple ID', href: 'support' }] }
            ]
        },
    ];

    const quickLinks = [
        { label: 'Find a Store', href: 'store' },
        { label: 'Apple Vision Pro', href: 'vision' },
        { label: 'AirPods', href: 'airpods' },
        { label: 'Apple Intelligence', href: 'home' },
        { label: 'Apple Trade In', href: 'store' },
    ];

    const searchResults = useMemo(() => {
        if (!searchQuery.trim()) return [];
        const query = searchQuery.toLowerCase();
        return products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category?.toLowerCase().includes(query)
        ).slice(0, 5);
    }, [searchQuery, products]);

    const handleMouseEnter = (item) => {
        if (isSearchActive) return;
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        setActiveItem(item);
        setHoveredIcon(null);
    };

    const handleIconMouseEnter = (type) => {
        if (isSearchActive) return;
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        setActiveItem(null);
        setHoveredIcon(type);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setActiveItem(null);
            setHoveredIcon(null);
        }, 200);
    };

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        setHoveredIcon(null);
        setActiveItem(null);
        if (!isSearchActive) {
            setSearchQuery('');
            setTimeout(() => searchInputRef.current?.focus(), 100);
        }
    };

    const handleNavigateAndClose = (page) => {
        if (!page || page === '#') return;
        // Navigation disabled for homepage-only view
        console.log('Navigation to', page);
        setActiveItem(null);
        setHoveredIcon(null);
        setIsSearchActive(false);
        setSearchQuery('');
    };

    useEffect(() => {
        const handleKeydown = (e) => {
            if (e.key === 'Escape' && isSearchActive) {
                setIsSearchActive(false);
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, [isSearchActive]);

    return (
        <header className="fixed top-0 left-0 right-0 z-[100]" onMouseLeave={handleMouseLeave}>
            {/* Immersive Search Overlay */}
            <div
                className={`absolute inset-x-0 top-0 bg-white z-[110] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-2xl ${isSearchActive ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
                <div className="max-w-[1024px] mx-auto px-4 pt-12 pb-32">
                    {/* Main Search Input Area */}
                    <div className="flex items-center mb-10 transition-all duration-500 transform">
                        <svg className="w-8 h-8 text-zinc-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search apple.com"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full text-4xl md:text-5xl font-bold bg-transparent border-none outline-none text-[#1d1d1f] placeholder:text-zinc-500 transition-all"
                        />
                        <button onClick={toggleSearch} className="p-2 ml-4 text-zinc-400 hover:text-black">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Quick Links List */}
                    <div className="space-y-6">
                        <h4 className="text-[12px] font-medium text-zinc-400 uppercase tracking-widest mb-6">Quick Links</h4>
                        <ul className="space-y-5">
                            {(searchQuery ? searchResults : quickLinks).map((link, idx) => (
                                <li
                                    key={link.id || link.label}
                                    className={`transform transition-all duration-700 ease-out ${isSearchActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                    style={{ transitionDelay: `${100 + idx * 50}ms` }}
                                >
                                    <button
                                        onClick={() => {
                                            if (link.href) handleNavigateAndClose(link.href);
                                            else if (link.category) {
                                                const cat = link.category.toLowerCase().replace(' & ', '');
                                                handleNavigateAndClose(cat === 'tvhome' ? 'tvhome' : cat);
                                            }
                                        }}
                                        className="flex items-center text-[#1d1d1f] hover:text-blue-600 transition-colors group"
                                    >
                                        <svg className="w-4 h-4 mr-3 text-zinc-400 group-hover:text-blue-600 transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                        <span className="text-lg font-semibold">{link.name || link.label}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="relative z-[120] apple-blur border-b border-zinc-200 h-12 flex items-center">
                <div className="max-w-[1024px] mx-auto px-4 w-full h-full flex items-center justify-between">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="opacity-80 hover:opacity-100 transition-all transform hover:scale-110 flex items-center"
                    >
                        <svg className="w-4 h-5 fill-current" viewBox="0 0 17 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.073 10.125c.015-2.73 2.238-4.043 2.333-4.103-1.27-1.859-3.245-2.112-3.951-2.143-1.688-.172-3.295.992-4.15 0.992-.853 0-2.175-.97-3.606-.94-1.88.028-3.614 1.094-4.582 2.775-1.956 3.4-.499 8.419 1.402 11.166.93 1.343 2.035 2.85 3.492 2.793 1.403-.055 1.933-.907 3.633-.907 1.697 0 2.18.907 3.658.878 1.503-.028 2.457-1.357 3.382-2.71 1.069-1.564 1.513-3.08 1.536-3.159-.033-.015-2.956-1.133-2.987-4.544zm-2.484-6.815c.758-.921 1.269-2.203 1.13-3.484-1.1.045-2.434.733-3.224 1.654-.709.814-1.332 2.126-1.164 3.377 1.228.095 2.47-.624 3.258-1.547z" />
                        </svg>
                    </a>

                    <div className="hidden md:flex items-center space-x-7 h-full">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href="#"
                                onMouseEnter={() => handleMouseEnter(item)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigateAndClose(item.href);
                                }}
                                className="text-[12px] font-normal transition-colors flex items-center h-full px-1 text-zinc-700 hover:text-black"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-6 h-full relative">
                        <div className="relative flex items-center h-full">
                            <button
                                onClick={toggleSearch}
                                onMouseEnter={() => handleIconMouseEnter('search')}
                                className={`transition-all duration-300 flex items-center h-full ${isSearchActive ? 'text-blue-600' : 'opacity-80 hover:opacity-100 hover:scale-110'}`}
                            >
                                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" className="w-3.5 h-3.5 object-contain opacity-70" alt="Search" />
                            </button>

                            {!isSearchActive && (
                                <div
                                    className={`absolute top-12 right-0 w-[300px] bg-white border border-zinc-200 rounded-[18px] shadow-2xl transition-all duration-300 transform origin-top-right overflow-hidden z-[130] ${hoveredIcon === 'search' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}
                                >
                                    <div className="p-6">
                                        <h4 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Quick Links</h4>
                                        <ul className="space-y-4 mb-8">
                                            {quickLinks.slice(0, 3).map(link => (
                                                <li key={link.label}>
                                                    <button onClick={() => handleNavigateAndClose(link.href)} className="text-xs font-semibold hover:text-blue-600 flex items-center group w-full text-left">
                                                        <svg className="w-3 h-3 mr-2 text-zinc-300 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                        {link.label}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4 border-t border-zinc-100">
                                            <button
                                                onClick={toggleSearch}
                                                className="text-xs text-blue-600 font-bold hover:underline"
                                            >
                                                Explore search
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button
                            onMouseEnter={() => handleIconMouseEnter('bag')}
                            onClick={onOpenBag}
                            className="relative flex items-center h-full opacity-80 hover:opacity-100 transition-all hover:scale-110"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/1656/1656850.png" className="w-4 h-4 object-contain opacity-70" alt="Bag" />
                            {cartCount > 0 && (
                                <span className="absolute top-1 -right-2 bg-blue-600 text-white text-[10px] font-bold px-1.5 rounded-full min-w-[16px] h-4 flex items-center justify-center border-2 border-white">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mega Menu Dropdown */}
            <div
                className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-3xl z-[115] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-2xl ${activeItem && activeItem.sections && !isSearchActive ? 'max-h-[600px] opacity-100 pt-12 border-b border-zinc-200' : 'max-h-0 opacity-0 pointer-events-none'}`}
            >
                <div className="max-w-[1024px] mx-auto px-4 pb-20 pt-12 grid grid-cols-4 gap-12">
                    {activeItem?.sections?.map((section, idx) => (
                        <div
                            key={idx}
                            className={`${idx === 0 ? 'col-span-2' : 'col-span-1'} transform transition-all duration-700 ${activeItem ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            <h4 className="text-[12px] text-zinc-400 font-normal uppercase tracking-wider mb-6">{section.title}</h4>
                            <ul className="space-y-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <button
                                            onClick={() => handleNavigateAndClose(link.href)}
                                            className={`text-[#1d1d1f] transition-all duration-300 hover:text-blue-600 block leading-tight font-semibold text-left w-full ${idx === 0 ? 'text-[24px] md:text-[28px]' : 'text-sm'}`}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bag Dropdown */}
            <div
                className={`absolute top-12 right-0 w-[280px] bg-white border border-zinc-200 rounded-[18px] shadow-2xl transition-all duration-300 transform origin-top-right overflow-hidden z-[130] ${hoveredIcon === 'bag' && !isSearchActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'}`}
            >
                <div className="p-6">
                    {cartItems.length === 0 ? (
                        <p className="text-zinc-500 text-sm font-medium mb-6">Your bag is empty.</p>
                    ) : (
                        <div className="mb-6 space-y-4">
                            {cartItems.slice(0, 3).map((item, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <img src={item.image} className="w-10 h-10 object-contain" alt={item.name} />
                                    <span className="text-xs font-semibold truncate flex-grow">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="space-y-4 pt-6 border-t border-zinc-100">
                        <button onClick={onOpenBag} className="block text-xs text-blue-600 hover:underline">Check Out</button>
                        <button className="block text-xs hover:underline text-left w-full">Account</button>
                    </div>
                </div>
            </div>

            {/* Dimmed Background Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-[20px] z-[90] transition-opacity duration-500 pointer-events-none ${isSearchActive || activeItem || hoveredIcon ? 'opacity-100' : 'opacity-0'}`}
            />
        </header>
    );
};

export default Navbar;
