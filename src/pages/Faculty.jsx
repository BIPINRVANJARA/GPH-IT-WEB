import { Mail, Book, GraduationCap, Clock } from 'lucide-react';
import { facultyMembers } from '../data/mockData';

const Faculty = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Our Faculty</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {facultyMembers.map((faculty) => (
                        <div key={faculty.id} className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-md transition-shadow">
                            <div className="md:w-1/3 bg-gray-200 flex items-center justify-center">
                                {/* Placeholder for real images */}
                                <div className="w-full h-48 md:h-full bg-gray-300 flex items-center justify-center text-gray-500">
                                    <span className="text-4xl font-bold">{faculty.name.charAt(4)}</span>
                                </div>
                            </div>
                            <div className="p-6 md:w-2/3">
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{faculty.name}</h2>
                                <span className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                    {faculty.designation}
                                </span>

                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex items-center">
                                        <GraduationCap size={16} className="mr-2 text-gray-400" />
                                        <span>{faculty.qualification}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-2 text-gray-400" />
                                        <span>Experience: {faculty.exp}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail size={16} className="mr-2 text-gray-400" />
                                        <a href={`mailto:${faculty.email}`} className="hover:text-primary">{faculty.email}</a>
                                    </div>
                                    <div className="flex items-start mt-2">
                                        <Book size={16} className="mr-2 mt-1 text-gray-400 flex-shrink-0" />
                                        <span>
                                            <strong>Subjects:</strong> {faculty.subjects.join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faculty;
