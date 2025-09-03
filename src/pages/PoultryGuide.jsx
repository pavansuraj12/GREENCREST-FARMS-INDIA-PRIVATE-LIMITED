import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, ShieldCheck, Home, Droplets, Sun, Wind } from "lucide-react";

const guideSections = [
    {
        title: "Proper Housing",
        icon: Home,
        content: "Ensure the poultry house is well-ventilated, dry, and protects birds from predators and extreme weather. Provide at least 1-1.5 sq. ft. per bird for deep litter systems. The floor should be covered with 2-3 inches of clean, dry litter like rice husks or wood shavings."
    },
    {
        title: "Feeding and Nutrition",
        icon: Droplets,
        content: "Provide balanced feed appropriate for the birds' age. Starter, grower, and finisher mashes have different nutritional profiles. Ensure constant access to clean, fresh water. Feeders and waterers should be cleaned daily to prevent contamination."
    },
    {
        title: "Health and Disease Prevention",
        icon: ShieldCheck,
        content: "Follow a strict vaccination schedule as recommended by a veterinarian. Monitor the flock daily for any signs of illness (e.g., lethargy, ruffled feathers, coughing). Maintain strict biosecurity measures to prevent the introduction of diseases."
    },
    {
        title: "Seasonal Care - Summer",
        icon: Sun,
        content: "During summer, prevent heat stress by ensuring ample ventilation. Use foggers or sprinklers to cool the shed. Provide extra waterers with cool, clean water. Reduce bird density if possible. Add electrolytes and Vitamin C to the water."
    },
    {
        title: "Seasonal Care - Winter",
        icon: Wind,
        content: "Protect birds from cold drafts by using curtains on the sides of the shed. Ensure the litter is dry to prevent ammonia buildup and respiratory issues. Provide adequate lighting to encourage feeding. Increase energy content in the feed."
    }
];

export default function PoultryGuide() {
    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <BookOpen className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Poultry Care <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Guide</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Best practices and expert tips for raising healthy and productive chickens.
                    </p>
                </motion.div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
                        {guideSections.map((section, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                                <AccordionItem value={`item-${index}`} className="mb-4 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                                    <AccordionTrigger className="p-6 text-lg font-semibold text-gray-800 hover:no-underline hover:bg-emerald-50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                                                <section.icon className="w-6 h-6 text-emerald-600" />
                                            </div>
                                            {section.title}
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="p-6 pt-0 text-gray-600 leading-relaxed text-base">
                                        {section.content}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}