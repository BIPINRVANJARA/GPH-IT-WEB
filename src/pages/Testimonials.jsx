import { Quote } from 'lucide-react';
import { detailedTestimonials } from '../data/mockData';

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Testimonials</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detailedTestimonials.map(item => (
                        <div key={item.id} className="bg-white p-8 rounded-xl shadow-sm relative pt-12">
                            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-8 bg-accent text-white p-3 rounded-full">
                                <Quote size={20} />
                            </div>
                            <p className="text-gray-600 italic mb-6">"{item.text}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">{item.name}</h4>
                                    <p className="text-xs text-primary">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
