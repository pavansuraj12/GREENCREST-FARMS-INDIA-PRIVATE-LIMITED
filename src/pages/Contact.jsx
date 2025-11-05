import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import {
    MessageCircle,
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    Building2,
    Heart
} from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        inquiryType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 3000);
        }, 1500);
    };

    const handleWhatsApp = () => {
        const phoneNumber = "917382185294";
        const message = "Hi! I'd like to know more about Greencrest Farms services. Please contact me.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCall = () => {
        window.location.href = "tel:+917382185294";
    };

    const handleEmail = () => {
        window.location.href = "mailto:info@greencrestfarms.com";
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Get in{" "}
                        <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're here to help you every step of the way. Contact our experts for personalized guidance.
                    </p>
                </motion.div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg"
                                onClick={handleWhatsApp}>
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <MessageCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">WhatsApp</h3>
                                    <p className="text-gray-600 mb-4">Get instant responses to your queries</p>
                                    <p className="text-lg font-semibold text-green-600">+91 73821 85294</p>
                                    <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Phone Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg"
                                onClick={handleCall}>
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone</h3>
                                    <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                                    <p className="text-lg font-semibold text-blue-600">+91 73821 85294</p>
                                    <p className="text-sm text-gray-500 mt-2">Mon-Sat: 9 AM - 8 PM</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Email Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 shadow-lg"
                                onClick={handleEmail}>
                                <CardContent className="p-8">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
                                    <p className="text-gray-600 mb-4">Send detailed inquiries</p>
                                    <p className="text-lg font-semibold text-purple-600">info@greencrestfarms.com</p>
                                    <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Contact Form & Location */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="shadow-xl border-0">
                                <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-t-lg">
                                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                        <Send className="w-6 h-6 text-emerald-600" />
                                        Send us a Message
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    {!isSubmitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <Label htmlFor="fullName" className="text-sm font-semibold text-gray-700">
                                                    Full Name *
                                                </Label>
                                                <Input
                                                    id="fullName"
                                                    value={formData.fullName}
                                                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                                                    placeholder="Enter your full name"
                                                    required
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label htmlFor="phoneNumber" className="text-sm font-semibold text-gray-700">
                                                        Phone Number *
                                                    </Label>
                                                    <Input
                                                        id="phoneNumber"
                                                        type="tel"
                                                        value={formData.phoneNumber}
                                                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                                        placeholder="+91 XXXXXXXXXX"
                                                        required
                                                        className="mt-2"
                                                    />
                                                </div>

                                                <div>
                                                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                                        Email Address *
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                                        placeholder="your@email.com"
                                                        required
                                                        className="mt-2"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <Label htmlFor="inquiryType" className="text-sm font-semibold text-gray-700">
                                                    Type of Inquiry *
                                                </Label>
                                                <Select
                                                    value={formData.inquiryType}
                                                    onValueChange={(value) => handleInputChange('inquiryType', value)}
                                                >
                                                    <SelectTrigger className="mt-2" required>
                                                        <SelectValue placeholder="Select inquiry type" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="chick-supply">Chick Supply</SelectItem>
                                                        <SelectItem value="breeding-services">Breeding Services</SelectItem>
                                                        <SelectItem value="farmer-support">Farmer Support Programs</SelectItem>
                                                        <SelectItem value="ai-technology">AI Technology Information</SelectItem>
                                                        <SelectItem value="general-question">General Question</SelectItem>
                                                        <SelectItem value="partnership">Partnership/Business</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>

                                            <div>
                                                <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                                                    Message/Description *
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={(e) => handleInputChange('message', e.target.value)}
                                                    placeholder="Please describe your requirements or questions..."
                                                    required
                                                    className="mt-2 h-32"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 group"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                                                        Sending Message...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                                                        Send Message
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    ) : (
                                        <div className="text-center py-12">
                                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                            <p className="text-gray-600 mb-4">
                                                Thank you for reaching out. We'll get back to you shortly.
                                            </p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Location & Maps */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Corporate Office Card */}
                            <Card className="shadow-xl border-0">
                                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                        <Building2 className="w-6 h-6 text-blue-600" />
                                        Corporate Office
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-4 mb-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Address</p>
                                                <p className="text-gray-600 leading-relaxed">
                                                    402, Venkatrama Towers,<br />
                                                    Ratnagiri Nagar, Guntur-522006,<br />
                                                    Andhra Pradesh, India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                            <div>
                                                <p className="font-semibold text-gray-900">Business Hours</p>
                                                <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                                <p className="text-gray-600">Sunday: 10:00 AM - 6:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                            <span className="font-semibold text-blue-800">Visit Our Office</span>
                                        </div>
                                        <p className="text-blue-700 text-sm">
                                            Located in the heart of Guntur for easy accessibility.
                                            GPS: 16.3075°N, 80.4169°E
                                        </p>
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