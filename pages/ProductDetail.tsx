
import React, { useState } from 'react';
import { useStore } from '../store';

const ProductDetail: React.FC = () => {
  const { selectedProduct, setView, addToCart } = useStore();
  const [selectedColor, setSelectedColor] = useState(0);

  if (!selectedProduct) return null;

  return (
    <div className="animate-in slide-in-from-right-10 duration-500">
      <div className="relative h-96 bg-slate-900 overflow-hidden">
        <button 
          onClick={() => setView('PRODUCTS')}
          className="absolute top-6 left-6 z-10 w-10 h-10 bg-slate-950/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button 
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-slate-950/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
        >
          <i className="far fa-heart"></i>
        </button>
        <img 
          src={selectedProduct.image} 
          alt={selectedProduct.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
           {[1,2,3].map(i => (
             <div key={i} className={`h-1.5 rounded-full transition-all ${i===1 ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/30'}`}></div>
           ))}
        </div>
      </div>

      <div className="p-8 bg-slate-950 -mt-10 rounded-t-[3rem] relative shadow-2xl space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold mb-1">{selectedProduct.name}</h2>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500 text-xs">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i >= Math.floor(selectedProduct.rating) ? 'text-gray-700' : ''}`}></i>
                ))}
              </div>
              <span className="text-gray-400 text-xs font-medium">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
            </div>
          </div>
          <div className="text-right">
             {selectedProduct.oldPrice && <p className="text-sm text-gray-500 line-through decoration-blue-500">${selectedProduct.oldPrice}</p>}
             <p className="text-2xl font-bold text-blue-500">${selectedProduct.price}</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Description</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {selectedProduct.description} 
            <button className="text-blue-500 font-bold ml-1">more</button>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Select Color</h3>
          <div className="flex space-x-3">
            {selectedProduct.colors.map((color, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedColor(idx)}
                className={`w-10 h-10 rounded-full border-4 transition-all ${selectedColor === idx ? 'border-blue-500 scale-110' : 'border-transparent'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button 
            onClick={() => {
              addToCart(selectedProduct);
              setView('CART');
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-[1.5rem] flex items-center justify-center space-x-3 transition-all active:scale-95 shadow-lg shadow-blue-900/40"
          >
            <i className="fas fa-shopping-cart"></i>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
