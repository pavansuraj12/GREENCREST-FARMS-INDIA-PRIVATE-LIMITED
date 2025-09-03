import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Leaf, ShieldCheck, Users } from 'lucide-react';

const approaches = [
    {
        icon: Zap,
        title: "Technology Implementation",
        description: "We integrate our proprietary AI monitoring systems seamlessly into farm operations, providing real-time data and alerts to optimize flock management and health.",
        color: "blue"
    },
    {
        icon: Leaf,
        title: "Sustainable Practices",
        description: "Our approach honors traditional farming wisdom. We promote natural breeding, waste reduction, and eco-friendly methods to ensure our environmental footprint is minimal.",
        color: "green"
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description: "From parent stock selection to chick delivery, every step is governed by strict quality control protocols, ensuring our farmers receive only the healthiest, most resilient birds.",
        color: "emerald"
    },
    {
        icon: Users,
        title: "Farmer Empowerment",
        description: "We are more than a supplier; we are a partner. We provide comprehensive training, continuous support, and market linkage to ensure our farmers' long-term success and profitability.",
        color: "purple"
    }
];

export default function Approach() {
    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    The Greencrest <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Approach</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our holistic strategy for revolutionizing poultry farming through technology, sustainability, quality, and partnership.
                </motion.p>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {approaches.map((item, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                <div className="flex items-start gap-6">
                                    <div className={`flex-shrink-0 w-16 h-16 bg-${item.color}-100 rounded-xl flex items-center justify-center`}>
                                        <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}