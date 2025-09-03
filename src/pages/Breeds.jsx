import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Feather,
    Star,
    Shield,
    Heart,
    MessageCircle,
    ArrowRight,
    Award
} from "lucide-react";

const breeds = [
    {
        name: "Desi Country Chicken",
        category: "Native Breed",
        image: "/placeholder.svg",
        description: "Hardy, disease-resistant native breed with superior taste and nutrition. Perfect for organic farming and premium market positioning.",
        characteristics: [
            "Excellent disease resistance",
            "Superior taste and nutrition",
            "Adaptable to local climate",
            "High market demand",
            "Low maintenance"
        ],
        benefits: [
            "Premium market pricing",
            "Lower medication costs",
            "Natural foraging ability",
            "Traditional flavor profile"
        ],
        pricing: "₹45-55 per chick",
        availability: "Year-round",
        rating: 4.9,
        color: "from-amber-500 to-orange-600"
    },
    {
        name: "Kadaknath",
        category: "Special Breed",
        image: "/placeholder.svg",
        description: "Premium black chicken breed known for its medicinal properties and unique taste. High-value niche market product with excellent profitability.",
        characteristics: [
            "Distinctive black meat",
            "Medicinal properties",
            "Excellent mothering ability",
            "Hardy and adaptable",
            "Premium market positioning"
        ],
        benefits: [
            "Highest market prices",
            "Health-conscious consumers",
            "Unique selling proposition",
            "Export potential"
        ],
        pricing: "₹80-100 per chick",
        availability: "Limited seasonal batches",
        rating: 5.0,
        color: "from-gray-700 to-gray-900"
    },
    {
        name: "Aseel",
        category: "Heritage Breed",
        image: "/placeholder.svg",
        description: "Ancient Indian fighting breed known for strength and vigor. Excellent for meat production with distinctive muscular build and aggressive nature.",
        characteristics: [
            "Strong muscular build",
            "Excellent meat quality",
            "Natural immunity",
            "Aggressive temperament",
            "Historical significance"
        ],
        benefits: [
            "Premium meat quality",
            "Cultural significance",
            "Strong immune system",
            "Good growth rates"
        ],
        pricing: "₹60-75 per chick",
        availability: "Seasonal availability",
        rating: 4.8,
        color: "from-red-600 to-red-700"
    },
    {
        name: "Vanaraja",
        category: "Hybrid Breed",
        image: "/placeholder.svg",
        description: "Multi-colored hybrid breed developed for dual-purpose production. Combines good egg laying with excellent meat quality in rural conditions.",
        characteristics: [
            "Dual-purpose breed",
            "Multi-colored plumage",
            "Good feed conversion",
            "Adaptable to rural conditions",
            "Moderate growth rate"
        ],
        benefits: [
            "Egg and meat production",
            "Suitable for beginners",
            "Cost-effective farming",
            "Reliable performance"
        ],
        pricing: "₹50-65 per chick",
        availability: "Regular supply",
        rating: 4.7,
        color: "from-green-500 to-green-600"
    },
    {
        name: "Giriraja",
        category: "Hybrid Breed",
        image: "/placeholder.svg",
        description: "High-performing hybrid developed for backyard farming. Excellent egg production with good meat quality, suitable for small-scale farmers.",
        characteristics: [
            "High egg production",
            "Good meat quality",
            "Suitable for backyard farming",
            "Easy management",
            "Cost-effective"
        ],
        benefits: [
            "Regular income from eggs",
            "Low investment required",
            "Easy to manage",
            "Suitable for beginners"
        ],
        pricing: "₹45-60 per chick",
        availability: "Year-round",
        rating: 4.6,
        color: "from-blue-500 to-blue-600"
    },
    {
        name: "Rainbow Rooster",
        category: "Hybrid Breed",
        image: "/placeholder.svg",
        description: "Fast-growing hybrid breed with excellent feed conversion ratio. Ideal for commercial meat production with quick returns on investment.",
        characteristics: [
            "Fast growth rate",
            "Excellent FCR",
            "Commercial viability",
            "Uniform growth",
            "Market ready in 6-8 weeks"
        ],
        benefits: [
            "Quick returns",
            "High profitability",
            "Commercial scaling",
            "Predictable results"
        ],
        pricing: "₹55-70 per chick",
        availability: "Weekly batches",
        rating: 4.8,
        color: "from-purple-500 to-purple-600"
    }
];

export default function Breeds() {
    const handleWhatsApp = (breedName) => {
        const phoneNumber = "917382185294";
        const message = `Hi! I'm interested in learning more about your ${breedName} breed. Please provide availability and pricing details.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Feather className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Premium{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Chicken Breeds
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Discover our carefully selected collection of native, heritage, and hybrid chicken breeds.
                        Each breed is chosen for its unique characteristics, market demand, and profitability potential.
                    </p>
                </motion.div>
            </section>

            {/* Breeds Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {breeds.map((breed, index) => (
                            <motion.div
                                key={breed.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -5 }}
                            >
                                <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                                    <CardHeader className="relative overflow-hidden pb-4">
                                        {/* Breed Image Placeholder */}
                                        <div className="aspect-video mb-4 rounded-xl overflow-hidden relative">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${breed.color}`} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <Feather className="w-16 h-16 text-white/80" />
                                            </div>
                                        </div>

                                        <div className="flex items-start justify-between">
                                            <div>
                                                <Badge className="mb-3 bg-emerald-100 text-emerald-800">
                                                    {breed.category}
                                                </Badge>
                                                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                                                    {breed.name}
                                                </CardTitle>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`w-4 h-4 ${i < Math.floor(breed.rating)
                                                                        ? 'fill-yellow-400 text-yellow-400'
                                                                        : 'text-gray-300'
                                                                    }`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-600">({breed.rating})</span>
                                                </div>
                                            </div>
                                            <Award className="w-8 h-8 text-emerald-600" />
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6 pt-2">
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {breed.description}
                                        </p>

                                        {/* Characteristics */}
                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <Shield className="w-5 h-5 text-emerald-600" />
                                                Key Characteristics
                                            </h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {breed.characteristics.map((char, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex items-center gap-2 text-sm"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${breed.color} rounded-full`} />
                                                        <span className="text-gray-700">{char}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <Heart className="w-5 h-5 text-red-500" />
                                                Benefits
                                            </h4>
                                            <div className="space-y-2">
                                                {breed.benefits.map((benefit, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex items-center gap-2 text-sm"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                    >
                                                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Pricing & Availability */}
                                        <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600 mb-1">Pricing</p>
                                                    <p className="text-lg font-bold text-emerald-600">{breed.pricing}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600 mb-1">Availability</p>
                                                    <p className="text-sm text-gray-800">{breed.availability}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                            <Button
                                                onClick={() => handleWhatsApp(breed.name)}
                                                className={`w-full bg-gradient-to-r ${breed.color} hover:opacity-90 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl`}
                                            >
                                                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                Get This Breed
                                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                                            </Button>
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-700">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Need Help Choosing the Right Breed?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                            Our experts will help you select the perfect breed based on your farming goals,
                            climate conditions, and market requirements.
                        </p>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => handleWhatsApp("breed consultation")}
                                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                Get Expert Consultation
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}