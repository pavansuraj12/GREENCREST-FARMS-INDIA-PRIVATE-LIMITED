import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, PlayCircle } from "lucide-react";

const galleryImages = {
    all: [
        // Team photos
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/pavan.jpg", title: "Pavan", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/chaitanya.jpg", title: "Chaitanya", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/maneesh.jpg", title: "Maneesh", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/tarun.jpg", title: "Tarun", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5170.JPG", title: "Team Photo", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/WhatsApp Image 2025-09-01 at 14.14.45_3f59d431.jpg", title: "Team Event", category: "team" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5174.JPG", title: "Team Photo", category: "team" },

        // Farm and facility photos
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5126.JPG", title: "Farm Facility", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5146.JPG", title: "Farm Operations", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5149.JPG", title: "Farm Infrastructure", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5156.JPG", title: "Technology Setup", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5178.JPG", title: "Farm Environment", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5187.JPG", title: "Operations View", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5205.JPG", title: "Facility Overview", category: "farm" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5188.JPG", title: "Farm Layout", category: "farm" }
    ]
};

// Gallery videos for future implementation
const galleryVideos = {
    all: [
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5158.MOV", title: "Farm Operations Video", category: "farm", type: "video" },
        { src: "/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/IMG_5193.MOV", title: "Technology Demo", category: "technology", type: "video" }
    ]
};

// Generate category-specific arrays
const categories = [
    { value: "farm", label: "Farm", description: "Farm facilities and operations" },
    { value: "technology", label: "Technology", description: "AI monitoring systems" },
    { value: "team", label: "Team", description: "Meet our experts" },
    { value: "videos", label: "Videos", description: "Video content" },
];

// Update galleryImages object and combine with videos for specific categories
categories.forEach(cat => {
    if (cat.value === 'videos') {
        // Special case for videos category
        galleryImages[cat.value] = galleryVideos.all;
    } else {
        // Filter images by category
        galleryImages[cat.value] = galleryImages.all.filter(img => img.category === cat.value);
    }
});

export default function Gallery() {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [activeCategory, setActiveCategory] = useState("farm");
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        let images = galleryImages[activeCategory] || [];
        if (searchTerm) {
            images = images.filter(img =>
                img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                img.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredImages(images);
    }, [activeCategory, searchTerm]);

    const MediaCard = ({ media, index }) => {
        const isVideo = media.type === 'video' || media.src.toLowerCase().includes('.mov') || media.src.toLowerCase().includes('.mp4');

        return (
            <motion.div
                layout
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group relative transition-all duration-300 aspect-square"
                onClick={() => setLightboxImage(media)}
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative overflow-hidden w-full h-full">
                    {isVideo ? (
                        <>
                            <video
                                className="w-full h-full object-cover transition-transform duration-500"
                                muted
                                playsInline
                            >
                                <source src={media.src} type="video/quicktime" />
                                <source src={media.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* Video Play Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                <PlayCircle className="w-12 h-12 text-white/80 group-hover:text-white transition-colors duration-300" />
                            </div>
                        </>
                    ) : (
                        <img
                            src={media.src}
                            alt="Gallery image"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    )}
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Visual <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Journey</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Explore the world of Greencrest Farms through our interactive gallery.
                </motion.p>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="flex justify-center mb-8">
                        <div className="relative max-w-md w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search images..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Category Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <motion.button
                                key={category.value}
                                onClick={() => setActiveCategory(category.value)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${activeCategory === category.value
                                    ? "bg-emerald-600 text-white shadow-lg transform scale-105"
                                    : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-gray-200"
                                    }`}
                            >
                                {category.label}
                            </motion.button>
                        ))}
                    </div>

                    {/* Results Info */}
                    <div className="text-center mb-6">
                        <p className="text-gray-600">
                            Showing {filteredImages.length} items
                            {searchTerm && ` for "${searchTerm}"`}
                            {` in ${categories.find(cat => cat.value === activeCategory)?.label}`}
                        </p>
                    </div>

                    {/* Image Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory}-${searchTerm}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        >
                            {filteredImages.map((media, index) => (
                                <MediaCard key={`${media.title}-${index}`} media={media} index={index} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {filteredImages.length === 0 && (
                        <div className="text-center py-12">
                            <h3 className="text-xl font-semibold text-gray-600">No media found</h3>
                            <p className="text-gray-500">Try adjusting your search or category filter</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Enhanced Lightbox for Images and Videos */}
            {lightboxImage && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {lightboxImage.type === 'video' || lightboxImage.src.toLowerCase().includes('.mov') || lightboxImage.src.toLowerCase().includes('.mp4') ? (
                                <video
                                    controls
                                    autoPlay
                                    className="w-full h-auto max-h-[80vh] rounded-lg object-contain"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                >
                                    <source src={lightboxImage.src} type="video/quicktime" />
                                    <source src={lightboxImage.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <img
                                    src={lightboxImage.src}
                                    alt="Gallery image"
                                    className="max-w-full max-h-[80vh] rounded-lg object-contain"
                                />
                            )}
                        </motion.div>
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 bg-black/20 rounded-full backdrop-blur-sm"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
}