import React from 'react';

const Footer = () => {
    const footerData = [
        {
            title: 'Shop and Learn',
            links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Accessories'],
        },
        {
            title: 'Apple Wallet',
            links: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
        },
        {
            title: 'Account',
            links: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
        },
        {
            title: 'Entertainment',
            links: ['Apple One', 'Apple TV+', 'Apple Music', 'Apple Arcade', 'Apple Fitness+', 'Apple News+', 'Apple Podcasts', 'Apple Books', 'App Store'],
        },
        {
            title: 'Apple Store',
            links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp', 'Apple Store App', 'Certified Refurbished', 'Apple Trade In', 'Financing', 'Order Status', 'Shopping Help'],
        },
        {
            title: 'For Business',
            links: ['Apple and Business', 'Shop for Business'],
        },
        {
            title: 'For Education',
            links: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
        },
        {
            title: 'For Healthcare',
            links: ['Apple in Healthcare', 'Health on Apple Watch', 'Health Records on iPhone'],
        },
        {
            title: 'Apple Values',
            links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Racial Equity and Justice', 'Supply Chain'],
        },
        {
            title: 'About Apple',
            links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
        },
    ];

    const handleLinkClick = (e, label) => {
        e.preventDefault();
        console.log('Footer link clicked:', label);
        // Navigation disabled for homepage-only view
    };

    return (
        <footer className="bg-[#f5f5f7] pt-8 pb-12 px-4 md:px-0 border-t border-zinc-200">
            <div className="max-w-[1024px] mx-auto text-[12px] text-zinc-500 leading-relaxed">
                <div className="space-y-4 pb-4 border-b border-zinc-200">
                    <p>1. Apple Intelligence will be available on iPhone 17 models, iPhone 16 Pro, and iPhone 15 Pro, with Siri and device language set to U.S. English. Some features and additional languages will be coming over the next year.</p>
                    <p>A subscription is required for Apple TV+.</p>
                    <p>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-8">
                    {footerData.map((section, idx) => (
                        <div key={idx} className="space-y-3">
                            <h4 className="font-semibold text-[#1d1d1f]">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <button
                                            onClick={(e) => handleLinkClick(e, link)}
                                            className="hover:underline text-left text-zinc-500 hover:text-[#1d1d1f] transition-colors"
                                        >
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-4 border-t border-zinc-200">
                    <p className="mb-4">
                        More ways to shop: <button onClick={(e) => handleLinkClick(e, 'store')} className="text-blue-600 underline">Find an Apple Store</button> or <a href="#" className="text-blue-600 underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0 text-zinc-400">
                        <p className="text-zinc-500">Copyright © 2024 Apple Inc. All rights reserved.</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                            {['Privacy Policy', 'Terms of Use', 'Sales and Refunds', 'Legal', 'Site Map'].map((item, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => handleLinkClick(e, 'support')}
                                    className="hover:underline text-zinc-600 border-r border-zinc-200 pr-4 last:border-0 last:pr-0"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <p className="text-zinc-600">United States</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
