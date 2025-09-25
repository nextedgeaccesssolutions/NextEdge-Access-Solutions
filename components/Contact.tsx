
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Thank you for your message! We will get back to you shortly.');
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold font-orbitron mb-4 text-yellow-400">Contact Us</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Have a project in mind or need a consultation? Reach out to us, and let's discuss how we can help you achieve your goals.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                                    <input type="text" id="name" name="name" required className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                                    <input type="email" id="email" name="email" required className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" required className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} required className="w-full bg-slate-700 text-white p-3 rounded-md border border-slate-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-colors"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full md:w-auto">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        {status && <p className="text-center text-green-400 mt-6">{status}</p>}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Contact;
