
import React from 'react';

const Hero: React.FC = () => {

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img src="https://picsum.photos/seed/ropeaccess/1920/1080" alt="Rope access professional at work" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl font-extrabold font-orbitron tracking-tight mb-4 leading-tight">
                    <span className="text-yellow-400">NextEdge</span> Access Solutions
                </h1>
                <p className="text-lg md:text-2xl font-light text-gray-300 max-w-3xl mx-auto mb-8">
                    Your trusted partner for safe and efficient work at height, delivering world-class rope access solutions.
                </p>
                <a 
                  href="#contact" 
                  onClick={scrollToContact}
                  className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Request a Consultation
                </a>
            </div>
        </section>
    );
};

export default Hero;
