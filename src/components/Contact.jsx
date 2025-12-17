import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Replace these with your actual EmailJS service, template, and public key
        // You can find these in your EmailJS dashboard
        const SERVICE_ID = 'service_t24fwv5';
        const TEMPLATE_ID = 'template_v4kokki';
        const PUBLIC_KEY = 'hmqaIgbrRJ4PhrOTe';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.error(error.text);
                alert("Failed to send message. Please try again or contact us directly.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold tracking-wide uppercase mb-2">Contact Us</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary">
                        Get In Touch
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-primary mb-1">Our Location</h4>
                                <p className="text-gray-600">
                                    11th Cross Road, <br />
                                    Magadi Rd, <br />
                                    Kempapura Agrahara, <br />
                                    Bengaluru - 560023, Karnataka
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Phone className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-primary mb-1">Phone Number</h4>
                                <p className="text-gray-600">+91 98455 51906</p>
                                <p className="text-gray-600">+91 84312 70367</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-primary/10 p-3 rounded-lg">
                                <Mail className="text-primary" size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-primary mb-1">Email Address</h4>
                                <p className="text-gray-600">omshakthiindustries@gmail.com</p>
                                <p className="text-gray-600">info.harshiths@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 p-8 rounded-xl shadow-lg"
                    >
                        <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className={`w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-secondary hover:text-primary transition-colors duration-300 flex items-center justify-center ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSending ? 'Sending...' : 'Send Message'}
                                {!isSending && <Send size={18} className="ml-2" />}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
