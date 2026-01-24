import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder images for initial display
const placeholderImages = [
  { id: "1", title: "Computer Lab", description: "State-of-the-art computer laboratory", category: "infrastructure", image_url: "/placeholder.svg" },
  { id: "2", title: "Classroom", description: "Modern classroom facilities", category: "infrastructure", image_url: "/placeholder.svg" },
  { id: "3", title: "Annual Day 2024", description: "Students performing at annual day celebration", category: "events", image_url: "/placeholder.svg" },
  { id: "4", title: "Technical Fest", description: "Students showcasing their projects", category: "events", image_url: "/placeholder.svg" },
  { id: "5", title: "Library", description: "Well-equipped departmental library", category: "infrastructure", image_url: "/placeholder.svg" },
  { id: "6", title: "Seminar Hall", description: "Seminar hall for presentations", category: "infrastructure", image_url: "/placeholder.svg" },
  { id: "7", title: "Sports Day", description: "Students participating in sports events", category: "events", image_url: "/placeholder.svg" },
  { id: "8", title: "Industrial Visit", description: "Students on industrial visit", category: "activities", image_url: "/placeholder.svg" },
];

const categories = ["all", "infrastructure", "events", "activities", "achievements"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { data: galleryImages } = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("gallery")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const images = galleryImages && galleryImages.length > 0 ? galleryImages : placeholderImages;
  
  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore moments from our department's journey - events, infrastructure, and achievements
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-square">
                  <img
                    src={image.image_url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-none">
          {selectedImage !== null && filteredImages[selectedImage] && (
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="flex items-center justify-center min-h-[60vh]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 text-white hover:bg-white/20 disabled:opacity-30"
                  onClick={handlePrevious}
                  disabled={selectedImage === 0}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                
                <img
                  src={filteredImages[selectedImage].image_url}
                  alt={filteredImages[selectedImage].title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 text-white hover:bg-white/20 disabled:opacity-30"
                  onClick={handleNext}
                  disabled={selectedImage === filteredImages.length - 1}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
              
              <div className="p-4 text-center text-white">
                <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
                <p className="text-white/70">{filteredImages[selectedImage].description}</p>
                <p className="text-sm text-white/50 mt-2">
                  {selectedImage + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Gallery;
