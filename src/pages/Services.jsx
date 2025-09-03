import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Heart,
    Star,
    Shield,
    Leaf,
    Brain,
    BookOpen,
    CheckCircle,
    MessageCircle,
    ArrowRight,
    Zap,
    Users,
    Target
} from "lucide-react";

const services = [
    {
        id: "country-chicken",
        icon: Heart,
        title: "Country Chicken (Desi/Native Breeds)",
        description: "Naturally grown, hardy birds with superior taste and nutrition. Perfect for farmers seeking authentic, high-quality poultry with excellent market demand.",
        features: [
            "Superior taste & nutrition profile",
            "Disease resistant hardy breeds",
            "Natural breeding methods",
            "Excellent market value",
            "Low mortality rates",
            "Adaptable to local climate"
        ],
        benefits: [
            "Higher profit margins",
            "Reduced medication costs",
            "Premium market positioning",
            "Sustainable farming practice"
        ],
        color: "from-emerald-500 to-emerald-600",
        bgColor: "bg-emerald-50",
        pricing: "Starting from ₹45 per chick",
        availability: "Year-round supply"
    },
    {
        id: "special-breeds",
        icon: Star,
        title: "Special Breeds",
        description: "Heritage and hybrid varieties carefully selected for niche markets. Premium breeds that command higher prices and cater to specific market segments.",
        features: [
            "Heritage breed varieties",
            "Hybrid performance breeds",
            "Market-focused selection",
            "Expert genetic consultation",
            "Specialty characteristics",
            "Premium positioning"
        ],
        benefits: [
            "Niche market access",
            "Premium pricing potential",
            "Differentiated products",
            "Expert breed selection"
        ],
        color: "from-green-500 to-green-600",
        bgColor: "bg-green-50",
        pricing: "₹60-₹100 per chick",
        availability: "Seasonal availability"
    },
    {
        id: "parent-stock",
        icon: Shield,
        title: "Parent Stock Breeding",
        description: "Healthy, disease-resistant parent flocks raised under expert supervision. Foundation for superior offspring with guaranteed genetic quality.",
        features: [
            "Expert veterinary supervision",
            "Disease resistant genetics",
            "Quality breeding protocols",
            "Health certification",
            "Genetic purity assurance",
            "Performance tracking"
        ],
        benefits: [
            "Superior offspring quality",
            "Genetic consistency",
            "Reduced health risks",
            "Long-term profitability"
        ],
        color: "from-teal-500 to-teal-600",
        bgColor: "bg-teal-50",
        pricing: "Custom pricing available",
        availability: "Limited premium stock"
    },
    {
        id: "chick-supply",
        icon: Leaf,
        title: "Chick Supply",
        description: "High-quality day-old country chicks with complete health certification. Delivered fresh with comprehensive support and guidance.",
        features: [
            "Day-old fresh chicks",
            "Health certified stock",
            "Complete vaccination records",
            "Transportation included",
            "Initial care guidance",
            "24/7 support hotline"
        ],
        benefits: [
            "Guaranteed fresh delivery",
            "Health assurance",
            "Expert guidance included",
            "Reliable supply chain"
        ],
        color: "from-lime-500 to-lime-600",
        bgColor: "bg-lime-50",
        pricing: "Bulk pricing available",
        availability: "Weekly supply batches"
    },
    {
        id: "ai-monitoring",
        icon: Brain,
        title: "AI-Powered Monitoring",
        description: "Revolutionary proprietary AI system for continuous health monitoring and disease detection. Optimize your flock management with intelligent insights.",
        features: [
            "24/7 real-time monitoring",
            "Disease prediction algorithms",
            "Behavioral analysis",
            "Environmental optimization",
            "Automated alert system",
            "Performance analytics"
        ],
        benefits: [
            "Early disease detection",
            "Reduced mortality rates",
            "Optimized feed efficiency",
            "Data-driven decisions"
        ],
        color: "from-cyan-500 to-cyan-600",
        bgColor: "bg-cyan-50",
        pricing: "₹2,999/month per 100 birds",
        availability: "Coming soon - Early access"
    },
    {
        id: "farmer-support",
        icon: BookOpen,
        title: "Farmer Support Programs",
        description: "Comprehensive training and ongoing support in feeding, housing, and management practices. Ensure your success with expert guidance.",
        features: [
            "Comprehensive training programs",
            "Housing design consultation",
            "Feed optimization guidance",
            "Health management protocols",
            "Market linkage support",
            "Regular farm visits"
        ],
        benefits: [
            "Increased success rates",
            "Expert knowledge transfer",
            "Ongoing support",
            "Market access"
        ],
        color: "from-indigo-500 to-indigo-600",
        bgColor: "bg-indigo-50",
        pricing: "Included with chick purchase",
        availability: "Ongoing support program"
    }
];

export default function Services() {
    const handleWhatsApp = (serviceName) => {
        const phoneNumber = "917382185294";
        const message = `Hi! I'm interested in learning more about your ${serviceName} service. Please provide more details.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/30 to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Comprehensive{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Poultry Solutions
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                            From premium breeding stock to AI-powered monitoring, we provide everything farmers need
                            for successful and profitable poultry operations across India.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 text-sm">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                24/7 Expert Support
                            </Badge>
                            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm">
                                <Zap className="w-4 h-4 mr-2" />
                                AI Technology
                            </Badge>
                            <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm">
                                <Shield className="w-4 h-4 mr-2" />
                                Quality Guaranteed
                            </Badge>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                                    <CardHeader className={`${service.bgColor} pb-8 relative overflow-hidden`}>
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

                                        <div className="relative">
                                            <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <service.icon className="w-10 h-10 text-white" />
                                            </div>

                                            <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300 mb-4">
                                                {service.title}
                                            </CardTitle>

                                            <p className="text-gray-700 text-lg leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-8">
                                        {/* Key Features */}
                                        <div className="mb-8">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <Target className="w-5 h-5 text-emerald-600" />
                                                Key Features
                                            </h4>
                                            <div className="grid grid-cols-1 gap-3">
                                                {service.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-sm">
                                                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full flex-shrink-0`} />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Benefits */}
                                        <div className="mb-8">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                <Star className="w-5 h-5 text-yellow-500" />
                                                Key Benefits
                                            </h4>
                                            <div className="space-y-2">
                                                {service.benefits.map((benefit, i) => (
                                                    <div key={i} className="flex items-center gap-3 text-sm">
                                                        <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Pricing & Availability */}
                                        <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600 mb-1">Pricing</p>
                                                    <p className="text-lg font-bold text-emerald-600">{service.pricing}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-600 mb-1">Availability</p>
                                                    <p className="text-sm text-gray-800">{service.availability}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Button */}
                                        <Button
                                            onClick={() => handleWhatsApp(service.title)}
                                            className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl`}
                                        >
                                            <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                            Get This Service
                                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Poultry Farm?
                        </h2>
                        <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                            Get personalized consultation and custom service packages tailored to your specific needs and farming goals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => handleWhatsApp("comprehensive consultation")}
                                className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                Get Free Consultation
                                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                            </Button>

                            <Button
                                onClick={() => handleWhatsApp("custom service package")}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 group border-2 border-white/20"
                            >
                                <Users className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                Custom Package
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}