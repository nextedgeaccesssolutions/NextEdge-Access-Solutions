
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Contact', href: '#contact' },
    ];
    
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="text-2xl font-bold font-orbitron text-yellow-400 tracking-wider">
                    NEAS
                </a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-slate-900/90 backdrop-blur-sm">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
