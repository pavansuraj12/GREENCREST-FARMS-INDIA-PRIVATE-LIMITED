import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Import homepage section components
import HeroSection from "@/components/homepage/HeroSection";
import CTASection from "@/components/homepage/CTASection";

const EntranceAnimation = ({ onComplete }) => {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // Stop automatic advancement at the egg stage (stage 2)
        if (stage === 2) return;

        const timer = setTimeout(() => {
            if (stage < 4) {
                setStage(stage + 1);
            } else {
                setTimeout(onComplete, 1000);
            }
        }, stage === 0 ? 2000 : 1500);

        return () => clearTimeout(timer);
    }, [stage, onComplete]);

    const handleEggClick = () => {
        if (stage === 2) {
            setStage(3);
        }
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900 z-[100] flex items-center justify-center">
            <div className="text-center">
                {stage === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <motion.img
                            src="/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/logo.png"
                            alt="GCF Logo"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mx-auto h-20 w-auto"
                        />
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-4xl font-bold text-white"
                        >
                            Greencrest Farms
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-emerald-200"
                        >
                            Loading Enterprise Agricultural Platform...
                        </motion.p>
                    </motion.div>
                )}

                {stage === 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-24 h-32 mx-auto"
                            >
                                <div className="w-full h-full bg-gradient-to-b from-white to-yellow-100 rounded-full relative shadow-2xl">
                                    <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-200 rounded-full opacity-50"></div>
                                    <div className="absolute bottom-4 right-3 w-2 h-2 bg-yellow-300 rounded-full"></div>
                                </div>
                            </motion.div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.7, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full"
                            ></motion.div>
                        </div>
                        <p className="text-white text-lg">Professional hen is preparing something special...</p>
                    </motion.div>
                )}

                {stage === 2 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-8"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            onClick={handleEggClick}
                            className="w-32 h-40 mx-auto cursor-pointer relative group"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-full shadow-2xl border-4 border-yellow-400 group-hover:shadow-yellow-300/50 transition-all duration-300">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute inset-2 bg-gradient-to-br from-yellow-300/50 to-orange-300/50 rounded-full"
                                ></motion.div>
                            </div>
                            <motion.div
                                animate={{
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.2, 0.6, 0.2]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-8 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full"
                            ></motion.div>
                        </motion.div>
                        <div className="space-y-2">
                            <p className="text-white text-lg font-semibold">Golden Innovation Awaits</p>
                            <p className="text-emerald-200">Click the golden egg to unveil enterprise excellence</p>
                        </div>
                    </motion.div>
                )}

                {stage === 3 && (
                    <motion.div
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.2, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 1 }}
                            className="w-32 h-40 mx-auto relative"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-full relative overflow-hidden">
                                <motion.div
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <svg width="60" height="60" viewBox="0 0 60 60" className="text-yellow-600">
                                        <motion.path
                                            d="M10 30 Q15 25 30 30 Q45 25 50 30 Q45 35 30 30 Q15 35 10 30 Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                        <p className="text-white text-lg">Revealing enterprise innovation...</p>
                    </motion.div>
                )}

                {stage === 4 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <motion.img
                            src="/GREENCREST-FARMS-INDIA-PRIVATE-LIMITED/assets/logo.png"
                            alt="GCF Logo"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, ease: "backOut" }}
                            className="mx-auto h-28 w-auto"
                        />
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h1 className="text-4xl font-bold text-white">Welcome to Greencrest Farms</h1>
                            <p className="text-xl text-emerald-200">Leading Agricultural Innovation</p>
                            <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-400">
                                Enterprise Excellence Since 2025
                            </Badge>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default function Homepage() {
    const [showEntrance, setShowEntrance] = useState(() => {
        // Check if animation has already been shown in this session
        const hasShownAnimation = sessionStorage.getItem('greencrest-animation-shown');
        return !hasShownAnimation;
    });

    const handleAnimationComplete = () => {
        // Mark animation as shown for this session
        sessionStorage.setItem('greencrest-animation-shown', 'true');
        setShowEntrance(false);
    };

    return (
        <>
            <AnimatePresence>
                {showEntrance && <EntranceAnimation onComplete={handleAnimationComplete} />}
            </AnimatePresence>

            <div className="min-h-screen">
                <HeroSection />
                <CTASection />
            </div>
        </>
    );
}