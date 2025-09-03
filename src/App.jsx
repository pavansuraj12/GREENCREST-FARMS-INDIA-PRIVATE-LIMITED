import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import ScrollToTop from '@/components/ScrollToTop';

// Import all pages
import Homepage from '@/pages/Homepage';
import AboutUs from '@/pages/AboutUs';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Testimonials from '@/pages/Testimonials';
import PoultryGuide from '@/pages/PoultryGuide';
import Gallery from '@/pages/Gallery';
import Innovation from '@/pages/Innovation';
import Approach from '@/pages/Approach';
import Breeds from '@/pages/Breeds';
import Blog from '@/pages/Blog';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/poultry-guide" element={<PoultryGuide />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/innovation" element={<Innovation />} />
                    <Route path="/approach" element={<Approach />} />
                    <Route path="/breeds" element={<Breeds />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;