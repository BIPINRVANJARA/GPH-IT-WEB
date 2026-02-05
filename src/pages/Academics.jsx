import { Calendar, FileText, CheckCircle } from 'lucide-react';
import { academicCalendar } from '../data/mockData';

const Academics = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Academics</h1>

                {/* Academic Calendar */}
                <section className="mb-12">
                    <div className="flex items-center mb-6">
                        <Calendar className="text-primary mr-3" size={32} />
                        <h2 className="text-2xl font-bold text-gray-800">Academic Calendar</h2>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100 border-b">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-gray-700">Event</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Date</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {academicCalendar[0].events.map((event, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-gray-800">{event.event}</td>
                                            <td className="px-6 py-4 text-gray-600 font-medium">{event.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Curriculum & Policies Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Curriculum */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <FileText className="text-primary mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Curriculum (GTU Syllabus)</h2>
                        </div>
                        <p className="text-gray-600 mb-6">
                            The department follows the curriculum prescribed by Gujarat Technological University (GTU).
                            The course covers core IT subjects, practical labs, and projects.
                        </p>
                        <ul className="space-y-3">
                            {[1, 2, 3, 4, 5, 6].map((sem) => (
                                <li key={sem} className="flex items-center justify-between p-3 bg-gray-50 rounded hover:bg-blue-50 transition-colors cursor-pointer">
                                    <span className="font-medium text-gray-700">Semester {sem}</span>
                                    <span className="text-sm text-primary font-bold">Dowload PDF</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Policies */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <CheckCircle className="text-primary mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Department Policies</h2>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Student Policy</h3>
                                <p className="text-sm text-gray-600">
                                    Strict adherence to attendance (min 75%), discipline, and lab safety rules is mandatory for all students.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Assessment Policy</h3>
                                <p className="text-sm text-gray-600">
                                    Continuous evaluation through mid-sem exams, practical journals, and vivas. Final GTU exam weightage is 70 marks.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Mentoring Policy</h3>
                                <p className="text-sm text-gray-600">
                                    Each student is assigned a faculty mentor for guidance on academic and personal progress throughout the diploma.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Academics;
