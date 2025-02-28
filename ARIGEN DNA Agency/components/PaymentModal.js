function PaymentModal({ isOpen, onClose, amount, planName }) {
    try {
        const [selectedMethod, setSelectedMethod] = React.useState('mpesa');

        const paymentMethods = {
            mpesa: { name: 'M-Pesa', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.png/320px-M-PESA_LOGO-01.png' },
            card: { name: 'Credit/Debit Card', icon: 'fas fa-credit-card' },
            paypal: { name: 'PayPal', icon: 'fab fa-paypal' },
            stripe: { name: 'Stripe', icon: 'fab fa-stripe' }
        };

        const handleSuccess = (data) => {
            console.log('Payment successful:', data);
            onClose();
            // Show success message
        };

        const handleError = (error) => {
            console.error('Payment failed:', error);
            // Show error message
        };

        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-[#1E3A8A] rounded-lg p-6 max-w-md w-full mx-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Payment for {planName}</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>

                    <div className="mb-6">
                        <div className="font-semibold mb-4">Select Payment Method</div>
                        <div className="grid grid-cols-2 gap-4">
                            {Object.entries(paymentMethods).map(([key, method]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedMethod(key)}
                                    className={`p-4 rounded-lg border ${
                                        selectedMethod === key
                                            ? 'border-blue-500 bg-blue-900'
                                            : 'border-blue-700 hover:border-blue-500'
                                    } transition-colors`}
                                >
                                    {typeof method.icon === 'string' && method.icon.startsWith('http') ? (
                                        <img src={method.icon} alt={method.name} className="h-8 mb-2 mx-auto" />
                                    ) : (
                                        <i className={`${method.icon} text-2xl mb-2`}></i>
                                    )}
                                    <div className="text-sm">{method.name}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {selectedMethod === 'mpesa' && (
                        <MpesaPayment
                            amount={amount}
                            onSuccess={handleSuccess}
                            onError={handleError}
                        />
                    )}

                    {selectedMethod === 'card' && (
                        <div className="text-center py-4">
                            <p>Credit card payment integration will be implemented here</p>
                        </div>
                    )}

                    {selectedMethod === 'paypal' && (
                        <div className="text-center py-4">
                            <p>PayPal payment integration will be implemented here</p>
                        </div>
                    )}

                    {selectedMethod === 'stripe' && (
                        <div className="text-center py-4">
                            <p>Stripe payment integration will be implemented here</p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('PaymentModal render error:', error);
        reportError(error);
        return null;
    }
}
