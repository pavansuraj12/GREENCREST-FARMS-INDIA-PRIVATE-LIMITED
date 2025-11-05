import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
    Users,
    Target,
    Lightbulb,
    Heart,
    MapPin,
    Calendar,
    Building2,
    Sparkles
} from "lucide-react";

const founders = [
    {
        name: "Chaitanya Alapati",
        photo: "/assets/chaitanya.jpg"
    },
    {
        name: "Maneesh Reddy Bhavanam",
        photo: "/assets/maneesh.jpg"
    },
    {
        name: "Tamma Tarun Sai Reddy",
        photo: "/assets/tarun.jpg"
    },
    {
        name: "Kanna Pavan Suraj",
        photo: "/assets/pavan.jpg"
    }
];

export default function AboutUs() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-100/30 to-transparent" />
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Sparkles className="w-6 h-6 text-emerald-600" />
                            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
                                Our Story
                            </span>
                            <Sparkles className="w-6 h-6 text-emerald-600" />
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Building India's{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Sustainable Future
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            Four visionary entrepreneurs united with an audacious dream to revolutionize
                            India's poultry landscape and empower every farmer to achieve unprecedented success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                                The Greencrest{" "}
                                <span className="text-emerald-600">Revolution</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    In January 2025, four visionary entrepreneurs - Chaitanya Alapati, Maneesh Reddy Bhavanam,
                                    Tamma Tarun Sai Reddy, and Kanna Pavan Suraj - united with an audacious dream: to revolutionize
                                    India's entire poultry landscape and empower every farmer to achieve unprecedented success.
                                </p>

                                <p>
                                    From our corporate office in Guntur, Andhra Pradesh, and our state-of-the-art farm in
                                    Gudavalli near Repalle, we're not just building a business - we're igniting a movement
                                    that's reshaping the future of sustainable agriculture across India.
                                </p>

                                <p className="font-semibold text-emerald-700">
                                    Our Unstoppable Mission: We exist to turn struggling farmers into thriving entrepreneurs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-emerald-500 to-green-600" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <Building2 className="w-16 h-16 mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">Founded January 2025</h3>
                                        <p className="text-lg opacity-90">Revolutionizing Indian Agriculture</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
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
                            Meet Our{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Visionary Leaders
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Four passionate entrepreneurs who combined their expertise to transform Indian poultry farming
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {founders.map((founder, index) => (
                            <motion.div
                                key={founder.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Card className="h-full group hover:shadow-lg transition-all duration-300 relative cursor-pointer">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform duration-300 overflow-hidden">
                                            <img
                                                src={founder.photo}
                                                alt={founder.name}
                                                className="w-full h-full object-cover object-top scale-110"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{ display: 'none' }}>
                                                {founder.name.charAt(0)}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2 relative">
                                            {founder.name}
                                            {/* Elegant underline animation */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
                                        </h3>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-emerald-50 to-emerald-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <Heart className="w-12 h-12 text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Transform struggling farmers into thriving entrepreneurs by combining traditional
                                        sustainable farming wisdom with breakthrough AI technology to create game-changing
                                        poultry solutions.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <Target className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Build India's sustainable poultry future where every farmer has access to advanced
                                        technology, expert guidance, and premium breeding stock at their fingertips.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="p-8">
                                    <Lightbulb className="w-12 h-12 text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Innovation</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Proprietary AI monitoring systems that predict, prevent, and perfect every aspect
                                        of poultry care, delivering unprecedented results for farmers across India.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Details */}
            <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            Company{" "}
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Information
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full shadow-lg border-0">
                                <CardContent className="p-8">
                                    <Building2 className="w-12 h-12 text-emerald-600 mb-6" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Corporate Office</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Address</p>
                                                <p className="text-gray-600">
                                                    402, Venkatrama Towers,<br />
                                                    Ratnagiri Nagar, Guntur-522006,<br />
                                                    Andhra Pradesh, India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Calendar className="w-5 h-5 text-emerald-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Founded</p>
                                                <p className="text-gray-600">January 15, 2025</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Users className="w-5 h-5 text-emerald-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">CIN</p>
                                                <p className="text-gray-600">U01499AP2025PTC117389</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full shadow-lg border-0">
                                <CardContent className="p-8">
                                    <Heart className="w-12 h-12 text-green-600 mb-6" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Farm Location</h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-green-600 mt-1" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Farm Address</p>
                                                <p className="text-gray-600">
                                                    Gudavalli near Repalle<br />
                                                    Andhra Pradesh, India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 rounded-lg p-4">
                                            <p className="text-green-800 font-semibold mb-2">🌱 Sustainable Farming</p>
                                            <p className="text-green-700 text-sm">
                                                Our state-of-the-art farm facility combines traditional sustainable practices
                                                with cutting-edge AI technology for optimal poultry breeding and care.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}