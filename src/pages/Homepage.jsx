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
        }, stage === 0 ? 2000 : stage === 1 ? 1500 : stage === 3 ? 5500 : 1500);

        return () => clearTimeout(timer);
    }, [stage, onComplete]);

    const handleEggClick = () => {
        if (stage === 2) {
            setStage(3);
        }
    };

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-emerald-100 to-green-200 z-[100] flex items-center justify-center">
            <div className="text-center">
                {stage === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <motion.img
                            src="/assets/logo.png"
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
                            className="text-4xl font-bold text-gray-800"
                        >
                            Greencrest Farms
                        </motion.h1>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-emerald-700"
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
                                className="w-28 h-40 mx-auto"
                            >
                                <div className="w-full h-full bg-gradient-to-b from-white to-yellow-100 relative shadow-2xl" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
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
                                className="absolute -inset-4 bg-gradient-to-br from-yellow-400/20 to-orange-400/20" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                            ></motion.div>
                        </div>
                        <p className="text-gray-700 text-lg">Professional hen is preparing something special...</p>
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
                            className="w-32 h-44 mx-auto cursor-pointer relative group"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 shadow-2xl border-4 border-yellow-400 group-hover:shadow-yellow-300/50 transition-all duration-300" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
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
                                    className="absolute inset-2 bg-gradient-to-br from-yellow-300/50 to-orange-300/50" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
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
                                className="absolute -inset-8 bg-gradient-to-br from-yellow-400/10 to-orange-400/10" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                            ></motion.div>
                        </motion.div>
                        <div className="space-y-2">
                            <p className="text-gray-800 text-lg font-semibold">Golden Innovation Awaits</p>
                            <p className="text-emerald-700">Click the golden egg to unveil enterprise excellence</p>
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
                                scale: [1, 1.05, 1],
                                rotate: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-32 h-44 mx-auto relative"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-yellow-400 relative overflow-hidden" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
                                {/* Ultra-Realistic Irregular Crack Animation */}
                                <motion.div
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.2 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <svg width="120" height="160" viewBox="0 0 120 160" className="absolute inset-0">
                                        {/* Main irregular horizontal crack with jagged edges */}
                                        <motion.path
                                            d="M8 78 L12 80 L16 76 L22 82 L28 79 L34 84 L40 77 L46 83 L52 80 L58 85 L64 78 L70 84 L76 81 L82 87 L88 79 L94 83 L100 80 L106 85 L112 81"
                                            stroke="#1a202c"
                                            strokeWidth="3.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.8, delay: 0.3 }}
                                        />
                                        {/* Secondary major fracture branches */}
                                        <motion.path
                                            d="M22 82 L18 88 L15 93 M34 84 L30 90 L26 96 M46 83 L42 89 L38 95 M58 85 L54 91 L50 97 M70 84 L66 90 L62 96 M82 87 L78 93 L74 99 M94 83 L90 89 L86 95"
                                            stroke="#2d3748"
                                            strokeWidth="2.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, delay: 1.8 }}
                                        />
                                        {/* Upper crack branches */}
                                        <motion.path
                                            d="M16 76 L12 70 L8 65 M28 79 L24 73 L20 68 M40 77 L36 71 L32 66 M52 80 L48 74 L44 69 M64 78 L60 72 L56 67 M76 81 L72 75 L68 70 M88 79 L84 73 L80 68 M100 80 L96 74 L92 69"
                                            stroke="#2d3748"
                                            strokeWidth="2.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 1 }}
                                            transition={{ duration: 1.5, delay: 1.9 }}
                                        />
                                        {/* Fine spider-web cracks */}
                                        <motion.path
                                            d="M25 79 L23 75 L21 73 M29 84 L31 88 L33 91 M43 77 L41 73 L39 71 M47 83 L49 87 L51 90 M61 78 L59 74 L57 72 M65 84 L67 88 L69 91 M79 81 L77 77 L75 75 M83 87 L85 91 L87 94"
                                            stroke="#4a5568"
                                            strokeWidth="1.8"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.9 }}
                                            transition={{ duration: 1.2, delay: 3.0 }}
                                        />
                                        {/* Micro hairline fractures */}
                                        <motion.path
                                            d="M35 79 L37 76 M37 84 L39 87 M55 80 L57 77 M57 85 L59 88 M75 81 L77 78 M77 87 L79 90 M95 80 L97 77 M97 83 L99 86"
                                            stroke="#718096"
                                            strokeWidth="1.2"
                                            fill="none"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.7 }}
                                            transition={{ duration: 1.0, delay: 3.8 }}
                                        />
                                        {/* Ultra-fine stress lines */}
                                        <motion.path
                                            d="M19 78 L17 76 M45 82 L43 80 M71 79 L69 77 M91 84 L89 82 M26 83 L24 85 M52 78 L50 76 M78 85 L76 87 M98 81 L96 79"
                                            stroke="#9ca3af"
                                            strokeWidth="0.8"
                                            fill="none"
                                            strokeLinecap="round"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={{ pathLength: 1, opacity: 0.5 }}
                                            transition={{ duration: 0.8, delay: 4.5 }}
                                        />
                                    </svg>
                                </motion.div>
                                {/* Realistic crack depth shadow */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.25 }}
                                    transition={{ duration: 1.2, delay: 5.0 }}
                                    className="absolute inset-0"
                                    style={{
                                        background: 'radial-gradient(ellipse 100% 8% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 40%, transparent 70%)',
                                        transform: 'translateY(0px)'
                                    }}
                                ></motion.div>
                            </div>
                        </motion.div>
                        <p className="text-gray-700 text-lg">Revealing enterprise innovation...</p>
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
                            src="/assets/logo.png"
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
                            <h1 className="text-4xl font-bold text-gray-800">Welcome to Greencrest Farms</h1>
                            <p className="text-xl text-emerald-700">Leading Agricultural Innovation</p>
                            <Badge className="bg-yellow-500/20 text-yellow-700 border-yellow-500">
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