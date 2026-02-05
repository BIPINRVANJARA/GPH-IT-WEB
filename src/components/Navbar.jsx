import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Faculty', path: '/faculty' },
        { name: 'Student', path: '/student' },
        { name: 'Placement', path: '/placement' },
        {
            name: 'More ▼', path: '#', children: [
                { name: 'Resources', path: '/resources' },
                { name: 'Infrastructure', path: '/infrastructure' },
                { name: 'News & Events', path: '/news' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Testimonials', path: '/testimonials' },
            ]
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3">
                        {/* Placeholder for Logo */}
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                            GP
                        </div>
                        <div className="hidden md:block">
                            <h1 className="text-lg font-bold leading-tight">Government Polytechnic<br />Himatnagar</h1>
                            <p className="text-xs text-blue-200">Information Technology Department</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-1 items-center">
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.children ? (
                                    <>
                                        <button className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-700 hover:text-white flex items-center focus:outline-none">
                                            {item.name}
                                        </button>
                                        <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block border border-gray-200">
                                            {item.children.map(child => (
                                                <NavLink
                                                    key={child.name}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary ${isActive ? 'bg-blue-50 text-primary font-bold' : ''}`
                                                    }
                                                >
                                                    {child.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                                ? 'bg-blue-800 text-white'
                                                : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-100 hover:text-white focus:outline-none p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item) => (
                                item.children ? (
                                    <div key={item.name} className="border-t border-blue-800 pt-2 mt-2">
                                        <span className="block px-3 py-2 text-blue-300 font-bold text-xs uppercase">{item.name.replace(' ▼', '')}</span>
                                        {item.children.map(child => (
                                            <NavLink
                                                key={child.name}
                                                to={child.path}
                                                onClick={() => setIsOpen(false)}
                                                className={({ isActive }) =>
                                                    `block px-6 py-2 rounded-md text-sm font-medium ${isActive
                                                        ? 'text-white'
                                                        : 'text-blue-100 hover:text-white'
                                                    }`
                                                }
                                            >
                                                {child.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                ) : (
                                    <NavLink
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                                ? 'bg-blue-800 text-white'
                                                : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
