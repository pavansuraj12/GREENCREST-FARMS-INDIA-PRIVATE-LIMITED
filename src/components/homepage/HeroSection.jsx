import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Brain, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const handleWhatsApp = () => {
        const phoneNumber = "917382185294";
        const message = "Hi! I'm interested in learning more about Greencrest Farms services.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/30 to-transparent" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="flex items-center gap-2 mb-6"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="flex items-center gap-1">
                                <Leaf className="w-5 h-5 text-emerald-600" />
                                <Brain className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
                                Traditional Farming × AI Technology
                            </span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Building India's{" "}
                            <motion.span
                                className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Sustainable
                            </motion.span>{" "}
                            Poultry Future
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Revolutionary AI-powered poultry solutions that combine traditional farming wisdom
                            with cutting-edge technology. Empowering farmers across India with premium breeding
                            stock and intelligent monitoring systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    onClick={handleWhatsApp}
                                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                                    Get Premium Chicks Today
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                            </motion.div>

                            <Link to={createPageUrl("Contact")}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="outline"
                                        className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                                    >
                                        Learn More
                                    </Button>
                                </motion.div>
                            </Link>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}