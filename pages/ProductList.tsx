
import React from 'react';
import { useStore } from '../store';
import { PRODUCTS, CATEGORIES } from '../constants';

const ProductList: React.FC = () => {
  const { filterCategory, setFilterCategory, setSelectedProduct, setView, addToCart } = useStore();

  const filtered = filterCategory === 'ALL' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filterCategory);

  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{filterCategory === 'ALL' ? 'All Products' : filterCategory}</h2>
        <div className="flex space-x-2">
           <button className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-gray-400">
            <i className="fas fa-search"></i>
          </button>
          <button className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 text-gray-400">
            <i className="fas fa-sliders"></i>
          </button>
        </div>
      </div>

      {/* Quick Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        <button 
          onClick={() => setFilterCategory('ALL')}
          className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${filterCategory === 'ALL' ? 'bg-blue-600 text-white' : 'bg-slate-900 text-gray-400 border border-slate-800'}`}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button 
            key={cat.id}
            onClick={() => setFilterCategory(cat.id)}
            className={`px-6 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${filterCategory === cat.id ? 'bg-blue-600 text-white' : 'bg-slate-900 text-gray-400 border border-slate-800'}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
        Showing {filtered.length} products
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {filtered.map(product => (
          <div 
            key={product.id} 
            className="bg-slate-900 rounded-[2rem] p-3 border border-slate-800 relative group"
          >
            <button className="absolute top-4 right-4 z-10 text-gray-400 hover:text-red-500 transition-colors">
              <i className="far fa-heart"></i>
            </button>
            <div 
              className="h-44 bg-slate-800 rounded-[1.5rem] mb-4 overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                setView('PRODUCT_DETAIL');
              }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="px-1">
              <h3 className="text-sm font-bold truncate mb-1">{product.name}</h3>
              <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col">
                  {product.oldPrice && (
                    <span className="text-[10px] text-gray-500 line-through decoration-blue-500">${product.oldPrice}</span>
                  )}
                  <span className="text-blue-400 font-bold text-base">${product.price}</span>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-8 h-8 bg-white text-slate-950 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-90"
                >
                  <i className="fas fa-shopping-cart text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
