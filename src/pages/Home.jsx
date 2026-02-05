import { Link } from 'react-router-dom';
import { Calendar, BookOpen, Briefcase, ArrowRight, Bell } from 'lucide-react';
import { newsItems, quickLinks, testimonials } from '../data/mockData';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Department of Information Technology</h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">Empowering Future Technocrats | Government Polytechnic Himatnagar</p>
                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <Link to="/about" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Explore Department
                        </Link>
                        <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* News Ticker / Section */}
            <section className="bg-white py-1">
                <div className="container mx-auto px-4">
                    <div className="flex items-center space-x-4 overflow-hidden border-b py-2">
                        <span className="flex items-center text-red-600 font-bold whitespace-nowrap"><Bell size={18} className="mr-1" /> Latest News:</span>
                        <div className="animate-marquee whitespace-nowrap overflow-hidden flex space-x-8">
                            {newsItems.map(item => (
                                <span key={item.id} className="text-gray-700 font-medium text-sm">
                                    <span className="font-bold text-primary">[{item.date}]</span> {item.title}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Brief */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-primary pl-4">About the Department</h2>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            Established with a vision to create competent IT professionals, our department offers a blend of theoretical knowledge and practical skills.
                            We focus on holistic development, industry interaction, and ethical values.
                        </p>
                        <Link to="/about" className="text-primary font-bold flex items-center hover:underline">
                            Read More about Vision & Mission <ArrowRight size={18} className="ml-1" />
                        </Link>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-accent">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Why Join Us?</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Experienced & Qualified Faculty</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> State-of-the-art Computer Labs</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Strong Industry Placements</li>
                            <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Focus on Project-based Learning</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Quick Links Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Quick Access</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {quickLinks.map((link, index) => (
                            <Link key={index} to={link.link} className="group bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 block border border-gray-100">
                                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {link.icon === 'Calendar' && <Calendar size={28} />}
                                    {link.icon === 'BookOpen' && <BookOpen size={28} />}
                                    {link.icon === 'Briefcase' && <Briefcase size={28} />}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{link.title}</h3>
                                <p className="text-gray-600">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map(item => (
                            <div key={item.id} className="bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
                                <p className="italic mb-4 text-lg">"{item.text}"</p>
                                <h4 className="font-bold">{item.name}</h4>
                                <p className="text-sm text-blue-200">{item.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
