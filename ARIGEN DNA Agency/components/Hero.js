function Hero() {
    try {
        return (
            <section data-name="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Unlock Your Genetic Story
                        </h1>
                        <p data-name="hero-subtitle" className="text-xl md:text-2xl mb-8 text-purple-200">
                            Discover your ancestry, health insights, and personal traits through advanced DNA testing
                        </p>
                        <div data-name="hero-cta" className="flex flex-col md:flex-row justify-center gap-4">
                            <button className="btn-primary">
                                Get Started
                            </button>
                            <button className="text-white border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
                                Learn More
                            </button>
                        </div>
                        
                        <div data-name="hero-stats" className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card">
                                <div className="text-3xl font-bold mb-2">99.9%</div>
                                <div className="text-purple-200">Accuracy Rate</div>
                            </div>
                            <div className="glass-card">
                                <div className="text-3xl font-bold mb-2">1M+</div>
                                <div className="text-purple-200">Satisfied Customers</div>
                            </div>
                            <div className="glass-card">
                                <div className="text-3xl font-bold mb-2">150+</div>
                                <div className="text-purple-200">Countries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero render error:', error);
        reportError(error);
        return null;
    }
}
