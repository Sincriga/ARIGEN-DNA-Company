function Pricing() {
    try {
        const plans = [
            {
                name: "Basic",
                price: "99",
                features: [
                    "Basic Ancestry Report",
                    "Ethnic Composition",
                    "DNA Relative Matching",
                    "Basic Health Insights"
                ]
            },
            {
                name: "Premium",
                price: "199",
                features: [
                    "Advanced Ancestry Report",
                    "Detailed Health Analysis",
                    "Genetic Trait Reports",
                    "Priority Support",
                    "Quarterly Updates"
                ]
            },
            {
                name: "Ultimate",
                price: "299",
                features: [
                    "Comprehensive DNA Analysis",
                    "Health & Medical Predisposition",
                    "Personalized Wellness Plans",
                    "1-on-1 Genetic Counseling",
                    "Monthly Updates",
                    "Family Planning Insights"
                ]
            }
        ];

        return (
            <section id="pricing" data-name="pricing" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 data-name="pricing-title" className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Choose Your Plan
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <div key={index} data-name={`plan-${index}`} 
                                className={`glass-card text-center transform hover:-translate-y-2 transition-transform duration-300 ${
                                    index === 1 ? 'border-purple-400 border-2' : ''
                                }`}>
                                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                                <div className="text-4xl font-bold mb-6">
                                    <span className="text-2xl">$</span>{plan.price}
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center justify-center">
                                            <i className="fas fa-check text-green-400 mr-2"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn-primary w-full">
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Pricing render error:', error);
        reportError(error);
        return null;
    }
}
