
import React from 'react';
import { useStore } from '../store';
import { CATEGORIES, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  const { setView, setFilterCategory, setSelectedProduct } = useStore();

  const handleCategoryClick = (cat: string) => {
    setFilterCategory(cat);
    setView('PRODUCTS');
  };

  const featuredProduct = PRODUCTS[0];

  return (
    <div className="p-6 space-y-8 animate-in fade-in duration-700">
      {/* Hero Banner */}
      <div 
        className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer"
        onClick={() => {
          setSelectedProduct(featuredProduct);
          setView('PRODUCT_DETAIL');
        }}
      >
        <img 
          src={featuredProduct.image} 
          alt="Featured" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <span className="px-3 py-1 bg-blue-600 text-[10px] font-bold uppercase rounded-full tracking-widest mb-2 inline-block">Featured Release</span>
          <h2 className="text-2xl font-bold text-white mb-1">{featuredProduct.name}</h2>
          <p className="text-gray-300 text-sm line-clamp-1">{featuredProduct.description}</p>
        </div>
      </div>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold">Categories</h3>
          <button className="text-blue-500 text-xs font-semibold hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="flex flex-col items-center p-4 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-800"
            >
              <i className={`fas ${cat.icon} text-xl text-blue-500 mb-2`}></i>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-400">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Newly Added */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold">New Arrivals</h3>
          <button onClick={() => handleCategoryClick('ALL')} className="text-blue-500 text-xs font-semibold hover:underline">See more</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
          {PRODUCTS.slice(0, 4).map(product => (
            <div 
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setView('PRODUCT_DETAIL');
              }}
              className="min-w-[160px] bg-slate-900 rounded-3xl p-3 border border-slate-800 cursor-pointer group"
            >
              <div className="h-40 bg-slate-800 rounded-2xl mb-3 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-xs font-bold text-white mb-1 truncate">{product.name}</h4>
              <div className="flex justify-between items-center">
                <span className="text-blue-400 font-bold text-sm">${product.price}</span>
                <div className="flex items-center text-[10px] text-yellow-500">
                  <i className="fas fa-star mr-1"></i>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant Promo */}
      <div className="bg-blue-600/20 border border-blue-500/30 rounded-3xl p-6 flex items-center justify-between">
        <div className="max-w-[60%]">
          <h4 className="font-bold text-white text-lg mb-1">Need styling advice?</h4>
          <p className="text-gray-300 text-xs">Chat with our AI concierge for personalized luxury recommendations.</p>
          <button 
            onClick={() => setView('AI_ASSISTANT')}
            className="mt-4 bg-white text-blue-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors"
          >
            Start Chat
          </button>
        </div>
        <div className="text-blue-500">
          <i className="fas fa-sparkles text-6xl opacity-30"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
