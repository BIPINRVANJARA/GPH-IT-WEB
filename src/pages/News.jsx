import { Calendar, FileText, Bell } from 'lucide-react';
import { newsItems } from '../data/mockData';

const News = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">News & Events</h1>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Latest News */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-primary pb-2 flex items-center">
                            <Bell className="mr-2" /> Latest Announcements
                        </h2>
                        {newsItems.map(item => (
                            <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary hover:bg-blue-50 transition-colors">
                                <span className="text-sm text-gray-500 font-bold block mb-1">{item.date}</span>
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                            </div>
                        ))}

                        {/* Events Section */}
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-accent pb-2 flex items-center mb-6">
                                <Calendar className="mr-2" /> Upcoming Events & Workshops
                            </h2>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 text-primary p-3 rounded text-center min-w-[80px]">
                                            <span className="block text-xl font-bold">25</span>
                                            <span className="text-xs uppercase font-bold">Oct</span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-gray-800">Cyber Security Workshop</h3>
                                            <p className="text-gray-600 text-sm">A one-day hands-on workshop on ethical hacking and security.</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="flex items-start">
                                        <div className="bg-blue-100 text-primary p-3 rounded text-center min-w-[80px]">
                                            <span className="block text-xl font-bold">05</span>
                                            <span className="text-xs uppercase font-bold">Nov</span>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-gray-800">CodeFiesta 2025</h3>
                                            <p className="text-gray-600 text-sm">Annual coding competition for all students.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                                <FileText className="mr-2 text-primary" /> Newsletters
                            </h2>
                            <p className="text-gray-600 mb-4 text-sm">Download our department's periodic newsletters.</p>
                            <ul className="space-y-3">
                                {['Jan - Jun 2025', 'Jul - Dec 2024', 'Jan - Jun 2024'].map((vol, idx) => (
                                    <li key={idx} className="flex justify-between items-center bg-gray-50 p-3 rounded cursor-pointer hover:bg-gray-100">
                                        <span className="font-medium text-gray-700">Vol {3 - idx}: {vol}</span>
                                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">PDF</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
