import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, MapPin } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        location: "Vijayawada, Andhra Pradesh",
        role: "Poultry Farmer",
        rating: 5,
        text: "Greencrest's AI monitoring system saved my entire flock! The early disease detection prevented a major outbreak. My production increased by 40% in just 6 months.",
        image: "👨‍🌾",
        highlight: "40% production increase"
    },
    {
        name: "Priya Sharma",
        location: "Guntur, Andhra Pradesh",
        role: "Commercial Farmer",
        rating: 5,
        text: "The quality of chicks from Greencrest is exceptional. 99% survival rate and their support team is always available. Best investment I've made for my farm.",
        image: "👩‍🌾",
        highlight: "99% survival rate"
    },
    {
        name: "Venkat Reddy",
        location: "Krishna District, AP",
        role: "Progressive Farmer",
        rating: 5,
        text: "Their training program transformed my farming approach. The combination of traditional wisdom and modern technology is brilliant. Highly recommend to all farmers.",
        image: "👨‍💼",
        highlight: "Complete transformation"
    }
];

export default function TestimonialsSnippet() {
    return (
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/30 to-transparent" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Quote className="w-6 h-6 text-emerald-600" />
                        <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
                            Success Stories
                        </span>
                        <Quote className="w-6 h-6 text-emerald-600 rotate-180" />
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        What Our{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Farmers Say
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real stories from farmers who have transformed their businesses with Greencrest
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500" />

                                <CardContent className="p-6">
                                    {/* Rating stars */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>

                                    {/* Testimonial text */}
                                    <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
                                        <Quote className="w-6 h-6 text-emerald-200 absolute -top-2 -left-2" />
                                        <p className="relative z-10 italic">"{testimonial.text}"</p>
                                    </blockquote>

                                    {/* Highlight badge */}
                                    <div className="mb-4">
                                        <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded-full">
                                            ✨ {testimonial.highlight}
                                        </span>
                                    </div>

                                    {/* User info */}
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
                                            {testimonial.image}
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-emerald-600 font-semibold">{testimonial.role}</p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <MapPin className="w-3 h-3" />
                                                <span>{testimonial.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Success metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-lg p-8 mb-8"
                >
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                            <div className="text-gray-600">Happy Farmers</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
                            <div className="text-gray-600">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">99.2%</div>
                            <div className="text-gray-600">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                            <div className="text-gray-600">Support Available</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <Button
                        size="lg"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold"
                        onClick={() => window.open('https://wa.me/917382185294?text=Hi! I\'d like to share my experience with Greencrest Farms.', '_blank')}
                    >
                        Share Your Story
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}