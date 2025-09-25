
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Expertise: React.FC = () => {
    const stats = [
        { value: 'IRATA', label: 'Certified Professionals' },
        { value: '100%', label: 'Safety Record' },
        { value: '24/7', label: 'Support' },
        { value: '15+', label: 'Years Combined Experience' },
    ];

    return (
        <section id="expertise" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/expertise/600/450" alt="Expert at work" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold font-orbitron mb-4 text-yellow-400">Unmatched Expertise</h2>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Our core strength lies in our team of IRATA-certified professionals who bring unparalleled skill and dedication to every project. We adhere to the strictest international safety standards, ensuring every operation is performed with precision and care.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="text-center p-4 bg-slate-800 rounded-lg">
                                        <p className="text-3xl font-bold text-yellow-400 font-orbitron">{stat.value}</p>
                                        <p className="text-gray-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Expertise;
