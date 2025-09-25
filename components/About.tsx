
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold font-orbitron mb-4 text-yellow-400">About NEAS</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                NextEdge Access Solutions (NEAS) is your trusted partner for safe and efficient work at height. Founded by a group of resilient and skilled Filipino OFW rope access professionals, NEAS embodies global experience and a commitment to excellence. 
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                We leverage IRATA-certified expertise to perform inspection, maintenance, and repair across wind, telecom, construction, and industrial projects. Our mission is to bring world-class rope access solutions to more industries across Asia, helping clients save time and costs while ensuring the highest standards of safety and quality.
                            </p>
                            <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}} className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300">
                                Our Services
                            </a>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src="https://picsum.photos/seed/teamwork/600/400" alt="NEAS Team" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default About;
