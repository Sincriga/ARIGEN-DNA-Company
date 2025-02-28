function MpesaPayment({ amount, onSuccess, onError }) {
    try {
        const [phoneNumber, setPhoneNumber] = React.useState('');
        const [isProcessing, setIsProcessing] = React.useState(false);
        const [error, setError] = React.useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError('');
            setIsProcessing(true);

            try {
                // In a real implementation, this would make an API call to your backend
                // which would then interact with the Mpesa Daraja API
                const response = await fetch('YOUR_BACKEND_API/mpesa/stkpush', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        phoneNumber,
                        amount
                    })
                });

                const data = await response.json();

                if (data.success) {
                    onSuccess(data);
                } else {
                    setError(data.message || 'Payment failed. Please try again.');
                    onError(data);
                }
            } catch (error) {
                setError('Network error. Please try again.');
                onError(error);
            } finally {
                setIsProcessing(false);
            }
        };

        return (
            <div data-name="mpesa-payment" className="payment-form glass-card">
                <div className="flex items-center mb-4">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.png/320px-M-PESA_LOGO-01.png" 
                        alt="M-Pesa Logo"
                        className="h-8 mr-2"
                    />
                    <h3 className="text-xl font-semibold">M-Pesa Payment</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="phone" className="block mb-2">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="254700000000"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-blue-900 border border-blue-700 text-white"
                            required
                        />
                    </div>

                    <div className="text-lg font-semibold">
                        Amount: KSh. {amount.toLocaleString()}
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn-primary w-full"
                        disabled={isProcessing}
                    >
                        {isProcessing ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin mr-2">
                                    <i className="fas fa-circle-notch"></i>
                                </div>
                                Processing...
                            </div>
                        ) : (
                            'Pay with M-Pesa'
                        )}
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('MpesaPayment render error:', error);
        reportError(error);
        return null;
    }
}
