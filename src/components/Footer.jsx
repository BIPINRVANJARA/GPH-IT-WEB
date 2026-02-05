import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Institute Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">GPH IT Dept</h3>
                        <p className="text-sm mb-4">
                            Providing quality technical education and fostering innovation in Information Technology.
                        </p>
                        <address className="not-italic text-sm space-y-2">
                            <div className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                                <span>
                                    Near GMERS Civil Hospital,<br />
                                    Gadhoda Road, Motipura,<br />
                                    Himatnagar – 383001
                                </span>
                            </div>
                        </address>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/academics" className="hover:text-white transition-colors">Academic Calendar</Link></li>
                            <li><Link to="/placement" className="hover:text-white transition-colors">Placement</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition-colors">Student Resources</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>02772-229285</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <a href="mailto:gphdit1@gmail.com" className="hover:text-white">gphdit1@gmail.com</a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <a href="mailto:gp-himatnagar-dte@gujarat.gov.in" className="hover:text-white">gp-himatnagar-dte@gujarat.gov.in</a>
                            </li>
                        </ul>
                    </div>

                    {/* External Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Government Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="https://gujaratindia.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                                    <ExternalLink size={14} className="mr-2" /> Gujarat Gov
                                </a>
                            </li>
                            <li>
                                <a href="https://gte.gujarat.gov.in/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                                    <ExternalLink size={14} className="mr-2" /> DTE Gujarat
                                </a>
                            </li>
                            <li>
                                <a href="https://www.gtu.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white">
                                    <ExternalLink size={14} className="mr-2" /> GTU
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Information Technology Department, Government Polytechnic Himatnagar.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
