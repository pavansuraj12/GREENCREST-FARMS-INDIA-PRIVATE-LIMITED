import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Newspaper } from "lucide-react";
import { Article } from "@/entities/Article";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            const fetchedArticles = await Article.list("-created_date");
            setArticles(fetchedArticles);
            setLoading(false);
        };
        fetchArticles();
    }, []);

    return (
        <div className="min-h-screen">
            <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-50 via-white to-green-50 text-center">
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                    GCF <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">Insights</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Latest news, industry insights, and farming tips from the experts at Greencrest Farms.
                </motion.p>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {loading ? (
                            Array(3).fill(0).map((_, i) => (
                                <div key={i} className="bg-gray-100 h-96 rounded-lg animate-pulse"></div>
                            ))
                        ) : articles.length > 0 ? (
                            articles.map((article, index) => (
                                <motion.div key={article.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                                    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <div className="aspect-video bg-gray-200 rounded-t-lg mb-4">
                                                {article.image && <img src={article.image} alt={article.title} className="w-full h-full object-cover" />}
                                            </div>
                                            <Badge>{article.category || 'News'}</Badge>
                                            <CardTitle className="pt-2">{article.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-gray-600 line-clamp-3">{article.summary}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button variant="outline" className="w-full">
                                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))
                        ) : (
                            <div className="lg:col-span-3 text-center py-12">
                                <Newspaper className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-700">No Articles Yet</h3>
                                <p className="text-gray-500">Check back soon for the latest insights and news.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}