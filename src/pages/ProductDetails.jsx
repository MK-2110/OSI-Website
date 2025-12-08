import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <div className="bg-white min-h-screen pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link to="/#products" className="inline-flex items-center text-secondary hover:text-primary mb-8 transition-colors">
                    <ArrowLeft className="mr-2" size={20} />
                    Back to Products
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Product Catalog & Specifications</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Detailed specifications for our Hydraulic Hose Assemblies, Crimp Fittings, and Industrial Nipples.
                    </p>
                </motion.div>

                {/* Section 1: Crimp Fittings Table */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-secondary pb-2 inline-block">
                        Crimp Fittings Specifications
                    </h2>
                    <div className="overflow-x-auto shadow-xl rounded-lg border border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">Part No.</th>
                                    <th className="py-4 px-6 text-left">Description</th>
                                    <th className="py-4 px-6 text-center">1/4"</th>
                                    <th className="py-4 px-6 text-center">3/8"</th>
                                    <th className="py-4 px-6 text-center">1/2"</th>
                                    <th className="py-4 px-6 text-center">5/8"</th>
                                    <th className="py-4 px-6 text-center">3/4"</th>
                                    <th className="py-4 px-6 text-center">1"</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-semibold">H107100</td>
                                    <td className="py-4 px-6">BSP MALE TAPERED</td>
                                    <td className="py-4 px-6 text-center">1/4"</td>
                                    <td className="py-4 px-6 text-center">3/8"</td>
                                    <td className="py-4 px-6 text-center">1/2"</td>
                                    <td className="py-4 px-6 text-center">5/8"</td>
                                    <td className="py-4 px-6 text-center">3/4"</td>
                                    <td className="py-4 px-6 text-center">1"</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-semibold">H105100</td>
                                    <td className="py-4 px-6">BSP MALE PARALLEL 60° CONE SEAT</td>
                                    <td className="py-4 px-6 text-center">1/4"</td>
                                    <td className="py-4 px-6 text-center">3/8"</td>
                                    <td className="py-4 px-6 text-center">1/2"</td>
                                    <td className="py-4 px-6 text-center">5/8"</td>
                                    <td className="py-4 px-6 text-center">3/4"</td>
                                    <td className="py-4 px-6 text-center">1"</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-semibold">H205120</td>
                                    <td className="py-4 px-6">BSP FEMALE 60° CONE CRIMP NUT</td>
                                    <td className="py-4 px-6 text-center">1/4"</td>
                                    <td className="py-4 px-6 text-center">3/8"</td>
                                    <td className="py-4 px-6 text-center">1/2"</td>
                                    <td className="py-4 px-6 text-center">5/8"</td>
                                    <td className="py-4 px-6 text-center">3/4"</td>
                                    <td className="py-4 px-6 text-center">1"</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-semibold">H205920</td>
                                    <td className="py-4 px-6">90° BSP FEMALE SWEPT ELBOW 60° CONE</td>
                                    <td className="py-4 px-6 text-center">1/4"</td>
                                    <td className="py-4 px-6 text-center">3/8"</td>
                                    <td className="py-4 px-6 text-center">1/2"</td>
                                    <td className="py-4 px-6 text-center">5/8"</td>
                                    <td className="py-4 px-6 text-center">3/4"</td>
                                    <td className="py-4 px-6 text-center">1"</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-50">
                                    <td className="py-4 px-6 font-semibold">H125100</td>
                                    <td className="py-4 px-6">JIC MALE 74° CONE</td>
                                    <td className="py-4 px-6 text-center">7/16"</td>
                                    <td className="py-4 px-6 text-center">9/16"</td>
                                    <td className="py-4 px-6 text-center">3/4"</td>
                                    <td className="py-4 px-6 text-center">7/8"</td>
                                    <td className="py-4 px-6 text-center">1.1/16"</td>
                                    <td className="py-4 px-6 text-center">1.5/16"</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Section 2: Technical Info */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-start">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <img
                            src="/images/Technical info.png"
                            alt="Technical Information"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <img
                            src="/images/Diagram Available in Brochure.png"
                            alt="Hose Assembly Angle Diagram"
                            className="w-full h-auto"
                        />
                    </div>
                </section>

                {/* Section 4: Full Product Catalog (Brochures) */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-primary mb-8 border-b-2 border-secondary pb-2 inline-block">
                        Product Visuals
                    </h2>
                    <div className="columns-1 md:columns-2 gap-4 space-y-4">
                        {[
                            "/images/H1.png",
                            "/images/H2.png",
                            "/images/H3.png",
                            "/images/H4.png",
                            "/images/H5.png",
                            "/images/Product5.png",
                            "/images/Product6.png"
                        ].map((imgSrc, index) => (
                            <div key={index} className="break-inside-avoid bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                <img
                                    src={imgSrc}
                                    alt={`Product Visual ${index + 1}`}
                                    className="w-full h-auto block"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Quality Policy */}
                <section className="bg-primary text-white p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-secondary opacity-10 rounded-full"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-secondary mb-6">Our Quality Policy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Shree Om Shakthi Industries is committed to delivering durable, high-accuracy machined components that ensure complete customer satisfaction.
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Every product is engineered with meticulous attention to detail, where precision and quality guide every stage of production. Our goal is to continuously align innovation with evolving manufacturing technologies.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                                    <span>Stringent adherence to industrial machining standards</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                                    <span>Long-standing professional relationships with reputed OEMs</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                                    <span>Trusted competitor among leading precision component manufacturers</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" />
                                    <span>Serving Automotive, Automation, and General Engineering sectors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;
