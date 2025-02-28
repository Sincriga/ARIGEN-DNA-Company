function Footer() {
    try {
        return (
            <footer data-name="footer" className="py-8 bg-[#4A0072]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4">ARIGEN</h3>
                            <p className="text-purple-200">
                                Pioneering DNA testing solutions for a healthier and more informed future.
                            </p>
                        </div>
                        
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#features" className="text-purple-200 hover:text-white">Features</a></li>
                                <li><a href="#pricing" className="text-purple-200 hover:text-white">Pricing</a></li>
                                <li><a href="#testimonials" className="text-purple-200 hover:text-white">Testimonials</a></li>
                                <li><a href="#contact" className="text-purple-200 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-purple-200 hover:text-white">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-purple-200 hover:text-white">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-purple-200 hover:text-white">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-purple-200 hover:text-white">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div data-name="footer-contact">
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-purple-200">
                                <li>
                                    <i className="fas fa-envelope mr-2"></i>
                                    info@arigen.com
                                </li>
                                <li>
                                    <i className="fas fa-phone mr-2"></i>
                                    +1 (555) 123-4567
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
                        <p>&copy; 2024 ARIGEN. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer render error:', error);
        reportError(error);
        return null;
    }
}
