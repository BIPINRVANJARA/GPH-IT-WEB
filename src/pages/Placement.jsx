import { Briefcase, Building, TrendingUp } from 'lucide-react';
import { placementStats, recruiters } from '../data/mockData';

const Placement = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Placement Cell</h1>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-4xl font-bold text-primary mb-2">{placementStats.placed}+</h3>
                        <p className="text-gray-600 text-sm">Students Placed</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-4xl font-bold text-primary mb-2">{placementStats.companies}</h3>
                        <p className="text-gray-600 text-sm">Recruiters</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-4xl font-bold text-accent mb-2">{placementStats.highestPackage}</h3>
                        <p className="text-gray-600 text-sm">Highest Package</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <h3 className="text-4xl font-bold text-blue-500 mb-2">{placementStats.avgPackage}</h3>
                        <p className="text-gray-600 text-sm">Avg Package</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* TPO Message / Overview */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <TrendingUp className="text-primary mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Training & Placement Activities</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            The T&P Cell organizes various activities to ensure students are industry-ready.
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Resume Building Workshops</li>
                            <li>Mock Interviews</li>
                            <li>Aptitude Tests</li>
                            <li>Industrial Visits</li>
                            <li>Expert Lectures on Emerging Technologies</li>
                        </ul>
                    </section>

                    {/* Recruiters */}
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <div className="flex items-center mb-6">
                            <Building className="text-primary mr-3" size={28} />
                            <h2 className="text-xl font-bold text-gray-800">Our Recruiters</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {recruiters.map((company, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium text-sm border border-blue-100">
                                    {company}
                                </span>
                            ))}
                            <span className="bg-gray-50 text-gray-600 px-4 py-2 rounded-full font-medium text-sm border border-gray-200">
                                And more...
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Placement;
