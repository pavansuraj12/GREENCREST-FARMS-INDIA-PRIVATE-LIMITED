export const createPageUrl = (pageName) => {
    // Convert page names to URL-friendly format
    const pageMap = {
        'Homepage': '/',
        'AboutUs': '/about',
        'Services': '/services',
        'Contact': '/contact',
        'Testimonials': '/testimonials',
        'PoultryGuide': '/poultry-guide',
        'Gallery': '/gallery',
        'Innovation': '/innovation',
        'Approach': '/approach',
        'Breeds': '/breeds',
        'Blog': '/blog'
    };

    return pageMap[pageName] || '/';
};