import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Shield, TrendingUp, Clock, Rocket } from "lucide-react";

export default function Innovation() {
    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-center">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Farming's <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Future, Today</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Discover how our proprietary AI and cutting-edge research are revolutionizing poultry farming for a sustainable and profitable future.
                </motion.p>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

                    {/* AI Monitoring System */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proprietary AI Monitoring</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">Our system uses advanced computer vision to monitor flock health, behavior, and environment 24/7, providing actionable insights to farmers.</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3"><Shield className="w-6 h-6 text-blue-500 mt-1" /><div><h3 className="font-semibold">Early Disease Detection</h3><p className="text-sm text-gray-500">Identify health issues before they spread, reducing mortality.</p></div></div>
                                <div className="flex items-start gap-3"><TrendingUp className="w-6 h-6 text-blue-500 mt-1" /><div><h3 className="font-semibold">Growth Optimization</h3><p className="text-sm text-gray-500">Ensure optimal growth rates through data-driven feed and environment adjustments.</p></div></div>
                                <div className="flex items-start gap-3"><Zap className="w-6 h-6 text-blue-500 mt-1" /><div><h3 className="font-semibold">Automated Alerts</h3><p className="text-sm text-gray-500">Receive real-time notifications on your phone for critical events.</p></div></div>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-blue-500 text-white p-8 rounded-2xl shadow-lg">
                            <Brain className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">The GCF AI Brain</h3>
                            <p>Our core technology analyzes thousands of data points per second to make poultry farming smarter, easier, and more profitable.</p>
                        </motion.div>
                    </div>

                    {/* Technology Roadmap */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12">Technology Roadmap</h2>
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
                            <div className="flex justify-between relative">
                                <div className="text-center w-1/4"><div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div><h4 className="font-semibold">Phase 1: 2025</h4><p className="text-sm text-gray-500">Launch AI Monitoring</p></div>
                                <div className="text-center w-1/4"><div className="w-4 h-4 bg-gray-300 rounded-full mx-auto mb-2"></div><h4 className="font-semibold">Phase 2: 2026</h4><p className="text-sm text-gray-500">Automated Feeding</p></div>
                                <div className="text-center w-1/4"><div className="w-4 h-4 bg-gray-300 rounded-full mx-auto mb-2"></div><h4 className="font-semibold">Phase 3: 2027</h4><p className="text-sm text-gray-500">Robotic Health Checks</p></div>
                                <div className="text-center w-1/4"><div className="w-4 h-4 bg-gray-300 rounded-full mx-auto mb-2"></div><h4 className="font-semibold">Phase 4: 2028</h4><p className="text-sm text-gray-500">Full Farm Automation</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Coming Soon */}
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-12 rounded-2xl text-center shadow-2xl">
                        <Clock className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                        <h2 className="text-3xl font-bold mb-4">Coming Soon: The GCF Smart Feeder</h2>
                        <p className="max-w-2xl mx-auto mb-6">An IoT-enabled device that automatically dispenses the optimal amount of feed based on real-time data from our AI, reducing waste and maximizing growth.</p>
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg">Get Notified on Launch</button>
                    </div>

                </div>
            </section>
        </div>
    );
}