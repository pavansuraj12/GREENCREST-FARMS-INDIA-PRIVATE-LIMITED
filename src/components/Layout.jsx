import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    ArrowUp,
    Heart,
    Leaf
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Logo component with loading state
const Logo = ({ className, width = 40, height = 40, loading = "eager", ...props }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div className={`relative flex-shrink-0 ${className}`}>
            {!imageLoaded && !imageError && (
                <div className="bg-gray-200 animate-pulse rounded-lg" style={{ width, height }} />
            )}
            {!imageError && (
                <img
                    src="/assets/logo.png"
                    alt="GREENCREST FARMS Logo"
                    className="object-contain"
                    style={{ width, height, opacity: imageLoaded ? 1 : 0 }}
                    loading={loading}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    {...props}
                />
            )}
            {imageError && (
                <div className="bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold" style={{ width, height, fontSize: Math.min(width, height) * 0.25 }}>
                    GCF
                </div>
            )}
        </div>
    );
};

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' }
];

export default function Layout({ children }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "917382185294";
        const message = "Hi! I'm interested in Greencrest Farms services. Can you provide more information?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
                <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
                    <div className="flex w-full items-center justify-between py-2">
                        <div className="flex items-center">
                            <Link to="/" className="flex items-center space-x-3">
                                <Logo width={60} height={60} loading="eager" />
                                <div>
                                    <h1 className="text-base font-bold text-gray-900 leading-tight">GREENCREST FARMS</h1>
                                    <p className="text-xs text-gray-600 leading-none">INDIA PRIVATE LIMITED</p>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`text-sm font-medium transition-all duration-300 px-3 py-2 relative group ${location.pathname === item.href
                                        ? 'text-emerald-600'
                                        : 'text-gray-700 hover:text-emerald-600'
                                        }`}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {/* Elegant underline animation */}
                                    <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transition-transform duration-300 origin-left ${location.pathname === item.href
                                        ? 'scale-x-100'
                                        : 'scale-x-0 group-hover:scale-x-100'
                                        }`}></div>
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:space-x-4">
                            <button
                                onClick={handleWhatsAppClick}
                                className="text-gray-700 hover:text-emerald-600 px-4 py-2 font-semibold transition-all duration-300 relative group"
                            >
                                <span className="relative z-10">Contact Us</span>
                                {/* Elegant underline animation */}
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></div>
                            </button>
                        </div>

                        <div className="lg:hidden">
                            <button
                                type="button"
                                className="p-2 text-gray-700"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] lg:hidden"
                        >
                            <div className="fixed inset-0 bg-black/90" onClick={() => setMobileMenuOpen(false)} />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 h-screen w-full max-w-sm bg-white shadow-2xl z-[10000]"
                            >
                                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
                                    <Link to="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                                        <Logo width={60} height={60} loading="eager" />
                                        <div>
                                            <h1 className="text-sm font-bold text-gray-900 leading-tight">GREENCREST FARMS</h1>
                                            <p className="text-xs text-gray-600 leading-none">INDIA PRIVATE LIMITED</p>
                                        </div>
                                    </Link>
                                    <button
                                        type="button"
                                        className="p-2 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="px-6 py-6 space-y-4 bg-white h-full overflow-y-auto">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            className={`block py-3 px-4 text-base font-semibold transition-all duration-300 relative group ${location.pathname === item.href
                                                ? 'text-emerald-600'
                                                : 'text-gray-700 hover:text-emerald-600'
                                                }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <span className="relative z-10">{item.name}</span>
                                            {/* Elegant underline animation */}
                                            <div className={`absolute bottom-2 left-4 right-4 h-0.5 bg-emerald-600 transition-transform duration-300 origin-left ${location.pathname === item.href
                                                ? 'scale-x-100'
                                                : 'scale-x-0 group-hover:scale-x-100'
                                                }`}></div>
                                        </Link>
                                    ))}

                                    <div className="pt-4 border-t border-gray-200">
                                        <button
                                            onClick={() => {
                                                handleWhatsAppClick();
                                                setMobileMenuOpen(false);
                                            }}
                                            className="w-full text-gray-700 hover:text-emerald-600 font-semibold py-3 transition-all duration-300 relative group"
                                        >
                                            <span className="relative z-10">Contact Us</span>
                                            {/* Elegant underline animation */}
                                            <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-emerald-600 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></div>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main content */}
            <main className="pt-16 flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Company info */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center space-x-3 mb-4 w-fit">
                                <Logo width={90} height={90} loading="lazy" />
                                <div>
                                    <h3 className="text-xl font-bold">GREENCREST FARMS INDIA PRIVATE LIMITED</h3>
                                    <p className="text-emerald-400 text-sm">Building India's Sustainable Future</p>
                                </div>
                            </Link>

                            <p className="text-gray-300 leading-relaxed mb-6">
                                Revolutionizing India's poultry landscape through AI-powered solutions, premium breeding stock,
                                and sustainable farming practices. Empowering farmers to achieve unprecedented success.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                    <span>+91 73821 85294</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                    <span>Info@greencrestfarms.com</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                                    <div>
                                        <p>402, Venkatrama Towers,</p>
                                        <p>Ratnagiri Nagar, Guntur-522006,</p>
                                        <p>Andhra Pradesh, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className="text-gray-300 hover:text-emerald-400 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>Leading Agricultural Innovation</li>
                                <li>Sustainable Farming Solutions</li>
                                <li>AI-Powered Monitoring</li>
                                <li>Premium Quality Standards</li>
                                <li>Expert Consultation</li>
                                <li>24/7 Customer Support</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-gray-800 mt-8 pt-6">
                        <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>© 2025 GREENCREST FARMS INDIA PRIVATE LIMITED. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to top button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 w-14 h-14 text-white bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-all duration-300 z-[9999] shadow-xl hover:shadow-2xl hover:scale-110"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}