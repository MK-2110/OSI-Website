import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        title: "CNC Components",
        description: "Precision-machined components designed to deliver reliability even under extreme operating conditions.",
        image: "/images/product1.png"
    },
    {
        id: 2,
        title: "Industrial Fittings",
        description: "Precision-engineered fittings ensuring leak-free connections for all systems.",
        image: "/images/product2.png"
    },
    {
        id: 3,
        title: "Precision Machined Components",
        description: "High-precision CNC-turned components engineered for accuracy, consistency, and superior finish.",
        image: "/images/product3.png"
    },
];

const Products = () => {
    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold tracking-wide uppercase mb-2">Our Products</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">
                        Premium Industrial Solutions
                    </h3>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Explore our wide range of high-quality products designed to meet your specific industrial needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-80 bg-white p-4 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-primary/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                                    <h4 className="text-xl font-bold text-secondary mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {product.title}
                                    </h4>
                                    <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
