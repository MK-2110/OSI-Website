import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div id="home" className="relative bg-primary h-screen flex items-center justify-center overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10"></div>

            {/* Background Image (Placeholder) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/hero-bg.png")',
                }}
            ></div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    Precision Engineering for <br />
                    <span className="text-secondary">Industrial Excellence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                >
                    Leading manufacturer of CNC Turning Components, Precision Machined Parts and Custom Industrial Solutions. Quality you can trust.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                    >
                        Explore Products
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-all duration-300"
                    >
                        Contact Us
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
