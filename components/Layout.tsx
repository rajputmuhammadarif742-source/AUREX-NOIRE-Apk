
import React from 'react';
import { useStore } from '../store';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setView, cart, view, user } = useStore();

  const NavItem = ({ icon, label, target, active }: any) => (
    <button 
      onClick={() => setView(target)}
      className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${active ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}
    >
      <i className={`fas ${icon} text-xl`}></i>
      <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white max-w-md mx-auto shadow-2xl relative border-x border-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setView('HOME')}>
          <img 
            src="logo.png" 
            alt="AUREX NOIRE" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Fallback to text if image is missing
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent && !parent.querySelector('.fallback-text')) {
                const span = document.createElement('span');
                span.className = 'fallback-text font-bold text-xl tracking-tighter';
                span.innerHTML = 'AUREX <span class="text-blue-500">NOIRE</span>';
                parent.appendChild(span);
              }
            }}
          />
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => setView('AI_ASSISTANT')} className="text-blue-400 hover:text-blue-300 transition-colors">
            <i className="fas fa-sparkles text-lg animate-pulse"></i>
          </button>
          <button onClick={() => setView('CART')} className="relative text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-shopping-bag text-lg"></i>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 px-8 py-4 flex justify-between items-center z-50">
        <NavItem icon="fa-house" label="Home" target="HOME" active={view === 'HOME'} />
        <NavItem icon="fa-layer-group" label="Shop" target="PRODUCTS" active={view === 'PRODUCTS'} />
        <NavItem icon="fa-clock-rotate-left" label="Orders" target="ORDERS" active={view === 'ORDERS'} />
        <NavItem icon="fa-user" label="Account" target="AUTH" active={view === 'AUTH'} />
      </nav>
    </div>
  );
};

export default Layout;
