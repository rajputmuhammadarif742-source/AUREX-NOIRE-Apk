
import React from 'react';
import { useStore } from '../store';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, setView } = useStore();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-800">
          <i className="fas fa-shopping-bag text-5xl"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-gray-400 text-sm mb-8">Looks like you haven't added anything to your luxury collection yet.</p>
        <button 
          onClick={() => setView('PRODUCTS')}
          className="bg-blue-600 px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col min-h-full pb-32 animate-in slide-in-from-right-4 duration-500">
      <div className="flex items-center mb-8">
         <button onClick={() => setView('PRODUCTS')} className="mr-4 text-gray-400"><i className="fas fa-arrow-left"></i></button>
         <h2 className="text-2xl font-bold">Shopping Cart</h2>
      </div>

      <div className="space-y-4 flex-1">
        {cart.map(item => (
          <div key={item.id} className="bg-slate-900/50 p-4 rounded-3xl border border-slate-800 flex items-center space-x-4">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl overflow-hidden shrink-0">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-white text-sm truncate">{item.name}</h4>
              <p className="text-blue-400 font-bold text-sm mb-2">${item.price}</p>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:bg-slate-800"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <span className="font-bold text-sm">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-6 h-6 rounded-full border border-slate-700 flex items-center justify-center text-xs hover:bg-slate-800"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className="text-gray-600 hover:text-red-500 transition-colors p-2"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>

      <div className="fixed bottom-24 left-0 right-0 max-w-md mx-auto px-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem] shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 font-medium">Subtotal</span>
            <span className="text-xl font-bold text-white">${subtotal}</span>
          </div>
          <button 
            onClick={() => setView('CHECKOUT')}
            className="w-full bg-white text-slate-950 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-xl"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
