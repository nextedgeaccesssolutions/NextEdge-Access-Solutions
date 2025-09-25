
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-slate-900 min-h-screen overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Expertise />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
