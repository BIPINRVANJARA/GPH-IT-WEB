import { BookOpen, Trophy, Code } from 'lucide-react';
import { studentResources } from '../data/mockData';

const Student = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Student Section</h1>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Study Material */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <BookOpen className="text-primary mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Study Materials</h2>
                        </div>
                        <ul className="space-y-4">
                            {studentResources.map((res) => (
                                <li key={res.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                                    <span className="font-medium text-gray-700">{res.subject}</span>
                                    <span className="text-xs bg-blue-100 text-primary px-2 py-1 rounded">{res.type}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-center">
                            <button className="text-primary font-bold hover:underline">View All Resources</button>
                        </div>
                    </section>

                    {/* Achievements */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <Trophy className="text-accent mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Student Achievements</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="border-l-4 border-yellow-400 pl-4 py-2">
                                <h3 className="font-bold text-gray-800">State Level Hackathon Winner</h3>
                                <p className="text-sm text-gray-600">Team "CodeWizards" secured 1st rank in Smart Gujarat Hackathon 2024.</p>
                            </div>
                            <div className="border-l-4 border-yellow-400 pl-4 py-2">
                                <h3 className="font-bold text-gray-800">GTU Topper</h3>
                                <p className="text-sm text-gray-600">Patel Riya secured SPI 9.8 in 5th Semester Summer 2024.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Student Projects */}
                <section className="bg-white p-8 rounded-xl shadow-sm">
                    <div className="flex items-center mb-6">
                        <Code className="text-primary mr-3" size={28} />
                        <h2 className="text-xl font-bold text-gray-800">Featured Projects (Final Year)</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-gray-800 mb-2">Smart Attendance System</h3>
                                <p className="text-sm text-gray-600 mb-4">IoT based attendance tracking using fingerprint sensor/RFID.</p>
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">IoT / Android</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Student;
