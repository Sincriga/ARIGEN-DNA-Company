function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            // Handle form submission here
            console.log('Form submitted:', formData);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        return (
            <section id="contact" data-name="contact" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 data-name="contact-title" className="text-3xl md:text-4xl font-bold text-center mb-12 font-poppins">
                        Get in Touch
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="contact-form-container">
                            <form onSubmit={handleSubmit} className="contact-form space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-montserrat">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block mb-2 font-montserrat">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block mb-2 font-montserrat">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="btn-primary w-full font-montserrat">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        <div className="contact-info">
                            <div className="glass-card mb-6">
                                <h3 className="text-xl font-bold mb-4 font-poppins">Visit Our Office</h3>
                                <div className="space-y-4 font-opensans">
                                    <p className="flex items-center text-blue-200">
                                        <i className="fas fa-map-marker-alt text-blue-400 mr-3 text-xl"></i>
                                        Mombasa Road, Nairobi, Kenya
                                    </p>
                                    <p className="flex items-center text-blue-200">
                                        <i className="fas fa-phone text-blue-400 mr-3 text-xl"></i>
                                        +254 (700) 123-4567
                                    </p>
                                    <p className="flex items-center text-blue-200">
                                        <i className="fas fa-envelope text-blue-400 mr-3 text-xl"></i>
                                        info@arigen.com
                                    </p>
                                </div>
                            </div>
                            
                            <div className="map-container glass-card">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7458554460585!2d36.8581!3d-1.3197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTknMTAuOSJTIDM2wrA1MSczNy4yIkU!5e0!3m2!1sen!2sus!4v1624451234567!5m2!1sen!2sus"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact render error:', error);
        reportError(error);
        return null;
    }
}
