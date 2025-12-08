import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-4">SHREE OM SHAKTHI INDUSTRIES</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for Precision in Every Micron, Commitment in Every Delivery.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#home" className="hover:text-secondary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-secondary transition-colors">About Us</a></li>
                            <li><a href="#products" className="hover:text-secondary transition-colors">Products</a></li>
                            <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Monday - Saturday: 9:00 AM - 6:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shree Om Shakthi Industries. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
