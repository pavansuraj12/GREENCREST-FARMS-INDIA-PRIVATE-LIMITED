import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
    { name: "Rajesh Patel", location: "Guntur, AP", role: "Poultry Farmer", rating: 5, text: "Greencrest Farms completely transformed my poultry business. Their AI monitoring system helped me increase my flock's survival rate to 98%. The support team is exceptional!", highlight: "98% survival rate" },
    { name: "Suman Reddy", location: "Repalle, AP", role: "Progressive Farmer", rating: 5, text: "The country chicks from Greencrest are the healthiest I've ever seen. Their breeding program and ongoing support have made farming profitable again for our family.", highlight: "Healthiest chicks ever" },
    { name: "Krishna Murthy", location: "Vijayawada, AP", role: "Commercial Farmer", rating: 5, text: "Working with Greencrest Farms was the best decision for my farm. The AI technology and expert guidance have increased my profits by 40% in just 6 months.", highlight: "40% profit increase" },
    { name: "Anjali Devi", location: "Tenali, AP", role: "Small-Scale Farmer", rating: 5, text: "The farmer support program is outstanding. I learned so much about proper feeding and housing, which has made a huge difference to my income.", highlight: "Outstanding support" },
    { name: "Ravi Kumar", location: "Ongole, AP", role: "Entrepreneur", rating: 5, text: "I started my poultry business with Greencrest's chicks and guidance. In one year, I've doubled my capacity. Their team is a true partner in success.", highlight: "Doubled capacity" },
    { name: "Lakshmi Priya", location: "Eluru, AP", role: "Organic Farmer", rating: 5, text: "The quality of their native breeds is unmatched. My customers love the taste, and I love the sustainable approach. Highly recommended!", highlight: "Unmatched quality" }
];

export default function Testimonials() {
    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Stories of <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Success</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from farmers across India who have transformed their livelihoods with Greencrest Farms.
                    </p>
                </motion.div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-1 mb-4">
                                            {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                                        </div>
                                        <div className="relative mb-6">
                                            <Quote className="w-8 h-8 text-emerald-200 absolute -top-2 -left-2" />
                                            <p className="text-gray-700 leading-relaxed pl-6">{testimonial.text}</p>
                                        </div>
                                        <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-lg inline-block mb-6 text-sm font-semibold">
                                            🎯 {testimonial.highlight}
                                        </div>
                                        <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                                <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.location}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Share Your Success Story</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Your feedback helps us grow and inspires other farmers. Join our community of success stories!
                    </p>
                    <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg">
                        Submit Your Testimonial
                    </button>
                </div>
            </section>
        </div>
    );
}