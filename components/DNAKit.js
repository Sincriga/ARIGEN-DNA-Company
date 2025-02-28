function DNAKit() {
    try {
        const [quantity, setQuantity] = React.useState(1);
        const [showPayment, setShowPayment] = React.useState(false);

        const handleQuantityChange = (change) => {
            const newQuantity = quantity + change;
            if (newQuantity >= 1) {
                setQuantity(newQuantity);
            }
        };

        const handlePurchase = () => {
            setShowPayment(true);
        };

        return (
            <section id="kit" data-name="dna-kit" className="py-16 bg-[#2563EB] bg-opacity-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="glass-card">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/2">
                                    <img 
                                        src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                                        alt="DNA Testing Kit"
                                        className="rounded-lg w-full h-auto"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <h2 className="text-3xl font-bold mb-4">DNA Testing Kit</h2>
                                    <p className="text-blue-200 mb-6">
                                        Complete DNA testing kit with everything you need to discover your genetic story.
                                        Simple, safe, and secure sample collection at home.
                                    </p>
                                    <div className="text-2xl font-bold mb-6">
                                        KSh. 50,000
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <button 
                                            onClick={() => handleQuantityChange(-1)}
                                            className="bg-blue-700 text-white w-8 h-8 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span className="text-xl">{quantity}</span>
                                        <button 
                                            onClick={() => handleQuantityChange(1)}
                                            className="bg-blue-700 text-white w-8 h-8 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className="mb-6">
                                        <div className="text-blue-200">Total Amount:</div>
                                        <div className="text-3xl font-bold">
                                            KSh. {(50000 * quantity).toLocaleString()}
                                        </div>
                                    </div>
                                    <button 
                                        onClick={handlePurchase}
                                        className="btn-primary w-full"
                                    >
                                        Purchase Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="glass-card text-center">
                                <i className="fas fa-box text-3xl text-blue-400 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Easy Collection</h3>
                                <p className="text-blue-200">Simple and painless sample collection process at home</p>
                            </div>
                            <div className="glass-card text-center">
                                <i className="fas fa-shipping-fast text-3xl text-blue-400 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                                <p className="text-blue-200">Free shipping both ways - we cover all delivery costs</p>
                            </div>
                            <div className="glass-card text-center">
                                <i className="fas fa-clock text-3xl text-blue-400 mb-4"></i>
                                <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
                                <p className="text-blue-200">Get your results within 2-3 weeks of sample receipt</p>
                            </div>
                        </div>
                    </div>
                </div>

                <PaymentModal
                    isOpen={showPayment}
                    onClose={() => setShowPayment(false)}
                    amount={50000 * quantity}
                    planName="DNA Testing Kit"
                />
            </section>
        );
    } catch (error) {
        console.error('DNAKit render error:', error);
        reportError(error);
        return null;
    }
}
