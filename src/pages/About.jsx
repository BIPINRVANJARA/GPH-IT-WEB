const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">About the Department</h1>
                    <div className="w-24 h-1 bg-accent mx-auto"></div>
                </div>

                {/* Profile Section */}
                <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Department Profile</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The Department of Information Technology at Government Polytechnic, Himatnagar was established with the
                        aim of providing quality technical education to the students of this region. The department
                        is equipped with modern computer laboratories and infrastructure to facilitate
                        effective teaching and learning.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our motivated faculty members allow us to offer a diverse range of subjects and stay updated with the
                        latest trends in technology. We strive to produce diploma engineers who are not only technically sound
                        but also socially responsible.
                    </p>
                </section>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <section className="bg-primary text-white rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold mb-4 border-b border-blue-400 pb-2 inline-block">Vision</h2>
                        <p className="text-lg leading-relaxed">
                            "To be a center of excellence in Information Technology education, producing competent professionals
                            capable of meeting the dynamic needs of industry and society."
                        </p>
                    </section>

                    <section className="bg-white rounded-xl shadow-sm p-8 border-l-4 border-accent">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="font-bold text-primary mr-2">M1.</span>
                                To provide high-quality technical education through effective teaching-learning processes.
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-primary mr-2">M2.</span>
                                To mold students into skilled professionals with strong ethical values and leadership qualities.
                            </li>
                            <li className="flex items-start">
                                <span className="font-bold text-primary mr-2">M3.</span>
                                To foster industry-institute interaction for bridging the gap between curriculum and industry requirements.
                            </li>
                        </ul>
                    </section>
                </div>

                {/* POs and PSOs */}
                <section className="bg-white rounded-xl shadow-sm p-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Educational Objectives (PEOs)</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li><strong>PEO-1:</strong> To prepare students for successful careers in IT industry or for higher studies.</li>
                            <li><strong>PEO-2:</strong> To enable students to analyze and solve real-world problems using IT tools.</li>
                            <li><strong>PEO-3:</strong> To inculcate professional ethics, teamwork, and communication skills.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Specific Outcomes (PSOs)</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                            <li><strong>PSO-1:</strong> Ability to apply standard software engineering practices in project development.</li>
                            <li><strong>PSO-2:</strong> Ability to design and maintain computer networks and database systems.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
