import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Brain,
    Activity,
    Shield,
    TrendingUp,
    ArrowRight,
    Sparkles
} from "lucide-react";

const innovations = [
    {
        icon: Brain,
        title: "AI Health Monitoring",
        description: "Advanced machine learning algorithms detect health issues before they become problems",
        stat: "99.2% accuracy"
    },
    {
        icon: Activity,
        title: "Real-time Analytics",
        description: "Live dashboard with vital metrics, feeding patterns, and environmental conditions",
        stat: "24/7 monitoring"
    },
    {
        icon: Shield,
        title: "Predictive Prevention",
        description: "Early warning system prevents disease outbreaks and optimizes treatment timing",
        stat: "85% reduction in mortality"
    },
    {
        icon: TrendingUp,
        title: "Growth Optimization",
        description: "Data-driven insights maximize feed efficiency and accelerate healthy growth",
        stat: "30% faster growth"
    }
];

export default function InnovationHighlight() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-50/50 to-transparent" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Sparkles className="w-6 h-6 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
                                Innovation at Work
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Revolutionary{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                AI Technology
                            </span>
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Our proprietary AI systems combine computer vision, IoT sensors, and machine learning
                            to create the most advanced poultry monitoring platform in India.
                        </p>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-emerald-600 rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Smart Health Detection</h4>
                                    <p className="text-gray-600">Identifies sick birds before symptoms are visible to human eye</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Environmental Control</h4>
                                    <p className="text-gray-600">Automatically adjusts temperature, humidity, and ventilation</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-3 h-3 bg-purple-600 rounded-full" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Predictive Analytics</h4>
                                    <p className="text-gray-600">Forecasts production metrics and optimizes feeding schedules</p>
                                </div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold"
                        >
                            Explore Innovation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {innovations.map((innovation, index) => (
                            <motion.div
                                key={innovation.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <innovation.icon className="w-6 h-6 text-emerald-600" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-lg font-bold text-gray-900">{innovation.title}</h3>
                                                    <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                                        {innovation.stat}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 text-sm leading-relaxed">{innovation.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl p-6 text-white text-center"
                        >
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <Brain className="w-6 h-6" />
                                <span className="text-lg font-bold">AI-Powered Results</span>
                            </div>
                            <p className="text-emerald-50 mb-4">
                                Join 500+ farmers already benefiting from our technology
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold">99.8%</div>
                                    <div className="text-sm text-emerald-100">Survival Rate</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">45%</div>
                                    <div className="text-sm text-emerald-100">Higher ROI</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}