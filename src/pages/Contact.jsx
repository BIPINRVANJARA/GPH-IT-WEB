import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully! (This is a demo)');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Get in Touch</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Address</h3>
                                        <p className="text-gray-600">
                                            Information Technology Department,<br />
                                            Government Polytechnic,<br />
                                            Near GMERS Civil Hospital, Gadhoda Road,<br />
                                            Motipura, Himatnagar – 383001
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">02772-229285</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-3 rounded-full mr-4 text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">Email</h3>
                                        <p className="text-gray-600">
                                            <a href="mailto:gphdit1@gmail.com" className="hover:text-primary transition-colors">gphdit1@gmail.com</a><br />
                                            <a href="mailto:gp-himatnagar-dte@gujarat.gov.in" className="hover:text-primary transition-colors">gp-himatnagar-dte@gujarat.gov.in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white p-2 rounded-xl shadow-sm h-64 md:h-80 overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9632486743477!2d72.9645!3d23.5795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db8c942955555%3A0x6b772c726359146!2sGovernment%20Polytechnic%2C%20Himatnagar!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="GPH Location"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                                    placeholder="Inquiry about..."
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition-colors"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                            >
                                <Send size={18} className="mr-2" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
