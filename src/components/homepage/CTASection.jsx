import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    Phone,
    MessageCircle,
    Sparkles
} from "lucide-react";

export default function CTASection() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "917382185294";
        const message = "Hi! I'm interested in Greencrest Farms services. Can you provide more information?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCallClick = () => {
        window.open('tel:+917382185294', '_self');
    };

    return (
        <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-green-700/90" />
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full" />
                <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full" />
                <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white/20 rounded-full" />
                <div className="absolute bottom-40 right-10 w-20 h-20 border border-white/20 rounded-full" />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-700" />
                <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-500" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-white"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-6 h-6 text-emerald-200" />
                            <span className="text-emerald-200 font-semibold text-sm tracking-wider uppercase">
                                Ready to Transform?
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                            Start Your{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Success Story
                            </span>{" "}
                            Today!
                        </h2>

                        <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                            Contact us to learn more about Greencrest Farms and how we can help transform your agricultural business.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    onClick={handleWhatsAppClick}
                                    size="lg"
                                    className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold group w-full sm:w-auto min-w-[200px]"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Chat on WhatsApp
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    onClick={handleCallClick}
                                    size="lg"
                                    className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold group w-full sm:w-auto min-w-[200px]"
                                >
                                    <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                    Call Now
                                </Button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-8 text-emerald-200"
                        >
                            <p className="text-sm">📞 +91 73821 85294 | Available 24/7</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Simplified content card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                                <p className="text-emerald-200 mb-6">
                                    Contact us today and discover how Greencrest Farms can help your agricultural business thrive.
                                </p>
                                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-4">
                                    <div className="text-white font-bold mb-1">💬 Get in Touch</div>
                                    <div className="text-emerald-200 text-sm">We're here to help you succeed</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}