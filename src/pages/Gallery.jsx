import { galleryImages } from '../data/mockData';

const Gallery = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-primary mb-12">Photo Gallery</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {galleryImages.map((src, idx) => (
                        <div key={idx} className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                            <img
                                src={src}
                                alt={`Gallery ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity">
                                {/* Overlay content if needed */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Helper text since we are using placeholders */}
                <p className="text-center text-gray-500 mt-8 italic">
                    * Images displayed are placeholders.
                </p>
            </div>
        </div>
    );
};

export default Gallery;
