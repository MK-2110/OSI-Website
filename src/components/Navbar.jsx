import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About Us', href: '/#about' },
        { name: 'Products', href: '/products' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav className="bg-primary text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center relative z-50">
                        {/* Placeholder to reserve space in the flex flow */}
                        <div className="w-28 h-25"></div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 left-0"
                        >
                            <Link to="/" className="flex items-center">
                                <img src="/images/OMSI_LOGO.png" alt="Shree Om Shakthi Industries" className="h-28 w-auto object-contain drop-shadow-md" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                link.href.startsWith('/#') ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="hover:text-secondary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className="hover:text-secondary transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Contact Info (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                            <Phone size={16} className="mr-2" />
                            <span>+91 98455 51906</span>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden bg-primary border-t border-gray-700"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                link.href.startsWith('/#') ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    </motion.div>
                )
            }
        </nav >
    );
};

export default Navbar;
