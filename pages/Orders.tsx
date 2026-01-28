
import React from 'react';
import { useStore } from '../store';

const Orders: React.FC = () => {
  const { orders, setView } = useStore();

  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] p-8 text-center animate-in fade-in duration-500">
        <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-800">
          <i className="fas fa-box-open text-5xl"></i>
        </div>
        <h2 className="text-xl font-bold mb-2">No orders yet</h2>
        <p className="text-gray-400 text-sm">When you acquire items from AUREX NOIRE, they will appear here.</p>
        <button 
          onClick={() => setView('PRODUCTS')}
          className="mt-8 bg-blue-600 px-8 py-3 rounded-2xl font-bold"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-left-4 duration-500">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      
      {orders.map(order => (
        <div key={order.id} className="bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4">
          <div className="flex justify-between items-start border-b border-slate-800 pb-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Order ID</p>
              <p className="font-bold">#{order.id}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Date</p>
              <p className="text-sm">{order.date}</p>
            </div>
          </div>
          
          <div className="flex -space-x-3 overflow-hidden py-2">
            {order.items.map((item, idx) => (
              <img 
                key={idx} 
                src={item.image} 
                alt={item.name} 
                className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" 
              />
            ))}
            {order.items.length > 3 && (
              <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                +{order.items.length - 3}
              </div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                order.status === 'Delivered' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
              }`}>
                {order.status}
              </span>
            </div>
            <p className="font-bold text-lg">${order.total}</p>
          </div>
          
          <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-colors">
            Order Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
