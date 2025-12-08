import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Award, Users, Clock, ShieldCheck, Zap, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold tracking-wide uppercase mb-2">About Us</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                        Precision in Every Micron, <br /> Commitment in Every Delivery
                    </h3>
                </div>

                {/* Who We Are & Legacy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h4 className="text-2xl font-bold text-primary mb-4">Who We Are</h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Founded on 11 June 1996 by Mr. Saravanan R, <span className="font-semibold text-primary">SHREE OM SHAKTHI INDUSTRIES</span> has grown into a trusted name in precision manufacturing for over 29+ years.
                            With strong expertise in CNC turning components, hydraulic components, end-fitting components, and custom job works, we continue to deliver quality and reliability that exceed customer expectations.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Today, the company is jointly led by Mr. Saravanan R and his son, Mr. Harshith Saravana, combining decades of experience with new-generation innovation to take the business forward.
                        </p>
                        <h4 className="text-xl font-bold text-primary mb-3">Our Legacy & Expertise</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Since 1996, we have been committed to producing high-precision components using both conventional and CNC machines. Our long-standing experience allows us to deliver consistent quality, tight tolerances, and reliable performance across every order—from prototypes to full-scale production.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-2xl">
                            {/* Placeholder for About Us Image - using unrelated industrial image or H5 if suitable, sticking to generic factory for now */}
                            <img
                                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                                alt="Industrial Factory"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-xl shadow-xl hidden md:block text-white">
                            <p className="text-5xl font-bold">29+</p>
                            <p className="font-medium mt-2">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-secondary shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <Target className="text-secondary mr-3" size={32} />
                            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To manufacture precision-engineered components that meet global quality standards while delivering responsive service, customer-focused solutions, and on-time delivery.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-primary shadow-md hover:shadow-lg transition-shadow">
                        <div className="flex items-center mb-4">
                            <Globe className="text-primary mr-3" size={32} />
                            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            To expand our manufacturing capabilities and become a recognized supplier for Aerospace and Defence components, through continuous improvement in technology, skill, and process excellence.
                        </p>
                    </div>
                </div>

                {/* Capabilities & Industries */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <Zap className="mr-2 text-secondary" /> Core Manufacturing Capabilities
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "CNC Turning Components",
                                "Hydraulic Components & End-Fittings",
                                "Custom Design & Development",
                                "Tooling & Fixture Manufacturing",
                                "Prototype-to-Production Support",
                                "Specialized Job Work Services"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                            <Globe className="mr-2 text-secondary" /> Industries We Serve
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Aerospace",
                                "Machinery & Equipment",
                                "Industrial Automation",
                                "Engineering Services"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="text-secondary flex-shrink-0 mt-1" size={18} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-gray-500 italic border-l-2 border-gray-300 pl-4">
                            "We are continuously expanding our domain expertise to support critical and high-precision sectors."
                        </p>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-primary">Why Choose Us?</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Award, title: "Precision & Quality", desc: "Advanced CNC technology ensures accuracy, repeatability, and superior finishing for every component." },
                            { icon: Users, title: "Experienced Team", desc: "A strong team of skilled machinists, engineers, and technicians capable of handling complex requirements with confidence." },
                            { icon: Target, title: "Customer-Focused", desc: "Every project is customized to meet the exact needs of your application—no compromises." },
                            { icon: Clock, title: "On-Time Delivery", desc: "Streamlined production planning ensures we meet deadlines without affecting quality." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Values */}
                <div className="bg-primary text-white p-12 rounded-2xl shadow-2xl mb-20 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-secondary mb-10 text-center">Our Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Integrity", desc: "Transparent operations and honest communication form the foundation." },
                                { title: "Quality", desc: "Strict quality checks to meet the highest industrial standards." },
                                { title: "Innovation", desc: "Investing in new technologies and modern machinery." },
                                { title: "Commitment", desc: "Reliability from the first interaction to final delivery." }
                            ].map((val, idx) => (
                                <div key={idx} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                                    <h4 className="text-xl font-bold text-secondary mb-3">{val.title}</h4>
                                    <p className="text-gray-300 text-sm">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="text-center bg-gray-50 p-10 rounded-2xl border border-gray-200">
                    <h3 className="text-2xl font-bold text-primary mb-4">A Partnership You Can Trust</h3>
                    <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
                        At <span className="font-semibold">SHREE OM SHAKTHI INDUSTRIES</span>, we believe in long-lasting professional relationships built on trust, quality, and continuous improvement.
                        Whether you need a single prototype or large-scale production, we are ready to support your manufacturing requirements with precision, professionalism, and dedication.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
