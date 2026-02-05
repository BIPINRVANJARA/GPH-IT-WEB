import { Book, Link as LinkIcon, Download, Monitor } from 'lucide-react';

const Resources = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Resources</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Book className="mr-2 text-primary" /> E-Books & Material
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Java Programming Reference</span>
                                <button className="text-blue-600 hover:text-blue-800"><Download size={18} /></button>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Data Structures Notes</span>
                                <button className="text-blue-600 hover:text-blue-800"><Download size={18} /></button>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                <span>Operating System Lab Manual</span>
                                <button className="text-blue-600 hover:text-blue-800"><Download size={18} /></button>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <LinkIcon className="mr-2 text-primary" /> Important Links
                        </h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-blue-600 hover:underline">NPTEL Video Lectures</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">GTU Student Portal</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Virtual Labs</a></li>
                            <li><a href="#" className="text-blue-600 hover:underline">Digital Gujarat Scholarship</a></li>
                        </ul>
                    </section>

                    <section className="bg-white p-8 rounded-xl shadow-sm md:col-span-2">
                        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                            <Monitor className="mr-2 text-primary" /> Software Tools
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Visual Studio Code', 'Android Studio', 'XAMPP', 'Eclipse', 'Packet Tracer', 'Python'].map(tool => (
                                <div key={tool} className="bg-gray-100 p-4 rounded text-center font-medium text-gray-700">
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resources;
