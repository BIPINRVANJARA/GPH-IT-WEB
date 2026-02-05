import { Monitor, Cpu, Wifi } from 'lucide-react';
import { infraDetails } from '../data/mockData';

const Infrastructure = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Infrastructure & Facilities</h1>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {infraDetails.map(item => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="font-bold text-xl text-gray-800 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Department Facilities</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                <Monitor size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">High-End Labs</h3>
                            <p className="text-gray-600 text-sm">Air-conditioned labs with latest configuration systems.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                <Wifi size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Wi-Fi Campus</h3>
                            <p className="text-gray-600 text-sm">High-speed internet connectivity for students and staff.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                                <Cpu size={32} />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Smart Classrooms</h3>
                            <p className="text-gray-600 text-sm">Projector-enabled classrooms for interactive learning.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Infrastructure;
