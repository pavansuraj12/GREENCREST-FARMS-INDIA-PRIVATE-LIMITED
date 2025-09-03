import React from "react";
import { motion } from "framer-motion";
import { Users, Leaf, Brain, Shield } from "lucide-react";

const stats = [
    {
        icon: Users,
        value: "500+",
        label: "Farmers Empowered",
        description: "Across Andhra Pradesh",
        color: "from-emerald-500 to-emerald-600"
    },
    {
        icon: Leaf,
        value: "10K+",
        label: "Healthy Chicks Delivered",
        description: "Premium breeds supplied",
        color: "from-green-500 to-green-600"
    },
    {
        icon: Brain,
        value: "24/7",
        label: "AI Monitoring",
        description: "Real-time health tracking",
        color: "from-teal-500 to-teal-600"
    },
    {
        icon: Shield,
        value: "99%",
        label: "Survival Rate",
        description: "Industry-leading results",
        color: "from-emerald-600 to-green-600"
    }
];

export default function StatsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Transforming Agriculture Through{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Innovation
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our impact speaks for itself. From traditional farms to AI-powered operations,
                        we're revolutionizing poultry farming across India.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:border-emerald-200">
                                <motion.div
                                    className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    <stat.icon className="w-8 h-8 text-white" />
                                </motion.div>

                                <motion.div
                                    className="text-4xl font-bold text-gray-900 mb-2"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                                <div className="text-sm text-gray-500">{stat.description}</div>

                                {/* Hover Gradient Border */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Interactive Pulse */}
                                <motion.div
                                    className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(45deg, ${stat.color.includes('emerald') ? '#10b981' : '#22c55e'}, transparent)`
                                    }}
                                    animate={{
                                        scale: [1, 1.02, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}