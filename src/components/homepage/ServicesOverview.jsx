import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Egg,
    Shield,
    Users,
    Building2,
    GraduationCap,
    ArrowRight
} from "lucide-react";

const services = [
    {
        icon: Egg,
        title: "Premium Breeding Stock",
        description: "High-quality, disease-resistant chicks from our carefully selected parent stock",
        color: "emerald",
        link: "/contact"
    },
    {
        icon: Brain,
        title: "AI Monitoring Systems",
        description: "Real-time health monitoring and predictive analytics for optimal flock management",
        color: "blue",
        link: "/contact"
    },
    {
        icon: Shield,
        title: "Biosecurity Solutions",
        description: "Comprehensive disease prevention and farm security protocols",
        color: "purple",
        link: "/contact"
    },
    {
        icon: Users,
        title: "Farmer Training",
        description: "Expert guidance and hands-on training for sustainable poultry practices",
        color: "orange",
        link: "/contact"
    },
    {
        icon: Building2,
        title: "Farm Infrastructure",
        description: "Complete setup assistance for modern, efficient poultry facilities",
        color: "green",
        link: "/contact"
    },
    {
        icon: GraduationCap,
        title: "Consultation Services",
        description: "Personalized advice from our team of poultry science experts",
        color: "indigo",
        link: "/contact"
    }
];

export default function ServicesOverview() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Our{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Comprehensive Services
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From premium breeding stock to AI-powered monitoring, we provide everything farmers need to succeed
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                                    <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

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
                        onClick={() => window.open('https://wa.me/917382185294?text=Hi! I\'d like to know more about your services.', '_blank')}
                    >
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}