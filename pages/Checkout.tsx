
import React, { useState } from 'react';
import { useStore } from '../store';

const Checkout: React.FC = () => {
  const { cart, clearCart, addOrder, setView } = useStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      addOrder({
        id: 'ORD' + Math.floor(Math.random() * 100000),
        date: new Date().toLocaleDateString(),
        items: [...cart],
        total: total,
        status: 'Processing'
      });
      clearCart();
      setLoading(false);
      setStep(4); // Success step
    }, 2000);
  };

  if (step === 4) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] p-8 text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 text-4xl shadow-lg shadow-green-500/20">
          <i className="fas fa-check"></i>
        </div>
        <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
        <p className="text-gray-400 mb-10 leading-relaxed">Your AUREX NOIRE exclusive package is being prepared. You can track your order in the history section.</p>
        <button 
          onClick={() => setView('ORDERS')}
          className="w-full bg-blue-600 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 mb-4"
        >
          View Orders
        </button>
        <button 
          onClick={() => setView('HOME')}
          className="text-gray-500 font-bold hover:text-white"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-8 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center">
         <button onClick={() => setView('CART')} className="mr-4 text-gray-400"><i className="fas fa-arrow-left"></i></button>
         <h2 className="text-2xl font-bold">Checkout</h2>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-between px-4">
        {[1, 2, 3].map(i => (
          <React.Fragment key={i}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= i ? 'bg-blue-600 text-white' : 'bg-slate-900 text-gray-600 border border-slate-800'}`}>
              {i < step ? <i className="fas fa-check"></i> : i}
            </div>
            {i < 3 && <div className={`flex-1 h-[2px] mx-2 ${step > i ? 'bg-blue-600' : 'bg-slate-800'}`}></div>}
          </React.Fragment>
        ))}
      </div>

      <div className="space-y-6">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Shipping Address</h3>
            <button className="text-blue-500 text-xs font-bold">Edit</button>
          </div>
          <div>
            <p className="font-bold">Maria Lee</p>
            <p className="text-sm text-gray-400">18 Sesame Street, New York, NY 10001</p>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs">Payment Method</h3>
            <button className="text-blue-500 text-xs font-bold">Edit</button>
          </div>
          <div className="flex items-center space-x-3">
             <div className="w-12 h-8 bg-slate-800 rounded flex items-center justify-center overflow-hidden">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="w-8" alt="Mastercard" />
             </div>
             <p className="font-bold">•••• •••• •••• 1234</p>
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-3">
          <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs mb-4">Order Summary</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className="border-t border-slate-800 pt-3 flex justify-between">
            <span className="font-bold">Total</span>
            <span className="font-bold text-blue-500 text-lg">${total}</span>
          </div>
        </div>
      </div>

      <button 
        disabled={loading}
        onClick={handlePlaceOrder}
        className="w-full bg-blue-600 py-5 rounded-[1.5rem] font-bold text-lg hover:bg-blue-700 transition-all active:scale-95 flex items-center justify-center space-x-3 shadow-lg shadow-blue-900/30"
      >
        {loading ? (
          <i className="fas fa-spinner fa-spin"></i>
        ) : (
          <>
            <i className="fas fa-lock"></i>
            <span>Confirm Order</span>
          </>
        )}
      </button>
      
      <p className="text-center text-[10px] text-gray-500 px-6">
        By placing your order, you agree to AUREX NOIRE's Terms of Service and Privacy Policy. Securely processed via Stripe.
      </p>
    </div>
  );
};

export default Checkout;
