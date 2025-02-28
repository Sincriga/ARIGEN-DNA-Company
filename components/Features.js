function Features() {
    try {
        const features = [
            {
                icon: "fa-dna",
                title: "Advanced DNA Analysis",
                description: "State-of-the-art genetic testing technology providing comprehensive insights into your ancestry and health"
            },
            {
                icon: "fa-shield-alt",
                title: "Privacy First",
                description: "Your genetic data is protected with military-grade encryption and strict privacy controls"
            },
            {
                icon: "fa-chart-line",
                title: "Regular Updates",
                description: "Receive ongoing updates about your genetic profile as new research becomes available"
            },
            {
                icon: "fa-users",
                title: "Expert Support",
                description: "Access to genetic counselors and healthcare professionals for personalized guidance"
            }
        ];

        return (
            <section id="features" data-name="features" className="py-16 bg-[#7B1FA2] bg-opacity-20">
                <div className="container mx-auto px-4">
                    <h2 data-name="features-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Why Choose ARIGEN?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} data-name={`feature-${index}`} className="glass-card text-center">
                                <i className={`fas ${feature.icon} text-4xl text-purple-400 mb-4`}></i>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-purple-200">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Features render error:', error);
        reportError(error);
        return null;
    }
}
