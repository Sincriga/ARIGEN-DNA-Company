function Testimonials() {
    try {
        const testimonials = [
            {
                name: "Sarah Johnson",
                role: "Healthcare Professional",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                content: "ARIGEN's DNA testing service provided me with invaluable insights about my health predispositions. The reports were comprehensive and easy to understand."
            },
            {
                name: "Michael Chen",
                role: "Tech Entrepreneur",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                content: "The ancestry tracking feature helped me discover my family history in ways I never imagined. The customer support team was exceptional throughout the process."
            },
            {
                name: "Emily Rodriguez",
                role: "Fitness Trainer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
                content: "Using ARIGEN's genetic insights has transformed how I approach my fitness and nutrition. The personalized recommendations are spot-on!"
            }
        ];

        return (
            <section id="testimonials" data-name="testimonials" className="py-16 bg-[#7B1FA2] bg-opacity-20">
                <div className="container mx-auto px-4">
                    <h2 data-name="testimonials-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
                        What Our Customers Say
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} data-name={`testimonial-${index}`} className="glass-card">
                                <div className="flex items-center mb-4">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-purple-300 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-purple-100">"{testimonial.content}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Testimonials render error:', error);
        reportError(error);
        return null;
    }
}
