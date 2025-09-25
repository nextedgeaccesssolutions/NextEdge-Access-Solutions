
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}

const servicesData: Service[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
        title: 'Inspection & Maintenance',
        description: 'Comprehensive inspection and maintenance services for industrial, construction, and telecom structures.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>,
        title: 'Scalable Solutions',
        description: 'Flexible and scalable access solutions for residential, commercial, and large-scale industrial projects.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
        title: 'Training & Consultancy',
        description: 'Professional training and consultancy in rope access techniques, safety compliance, and best practices.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        title: 'PPE Supply',
        description: 'Supply of high-quality, certified Personal Protective Equipment to ensure safety and compliance.'
    },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-yellow-400/20 transform hover:-translate-y-2 transition-all duration-300">
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold font-orbitron text-white mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold font-orbitron mb-4 text-yellow-400">Our Services</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-12">
                        We go beyond vertical access by delivering a full spectrum of solutions that support both exterior and interior facility needs with safety, efficiency, and consistency.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {servicesData.map(service => <ServiceCard key={service.title} service={service} />)}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Services;
