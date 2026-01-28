
import React, { useState } from 'react';
import { useStore } from '../store';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { setUser, setView } = useStore();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful auth
    setUser({
      id: 'usr123',
      name: formData.name || 'Member',
      email: formData.email,
      orders: []
    });
    setView('HOME');
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[80vh] animate-in zoom-in-95 duration-700">
      <div className="mb-10 flex flex-col items-center">
        <img 
          src="logo.png" 
          alt="AUREX NOIRE Logo" 
          className="w-56 h-auto object-contain mb-4 drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold text-center mt-2">Exclusive Access Only</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {!isLogin && (
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold text-gray-500 ml-4 tracking-widest">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
        )}
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-gray-500 ml-4 tracking-widest">Email Address</label>
          <input 
            type="email" 
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="member@aurexnoire.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-gray-500 ml-4 tracking-widest">Password</label>
          <input 
            type="password" 
            required
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-white text-slate-950 py-5 rounded-2xl font-bold text-lg mt-4 shadow-xl active:scale-95 transition-all"
        >
          {isLogin ? 'Login' : 'Create Account'}
        </button>
      </form>

      <div className="mt-8 flex items-center space-x-2">
        <span className="text-gray-500 text-sm">{isLogin ? "Don't have an account?" : "Already a member?"}</span>
        <button 
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 font-bold hover:underline text-sm"
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </div>

      <div className="mt-auto pt-12 text-[10px] text-gray-600 flex space-x-4">
        <button>Privacy Policy</button>
        <button>Terms of Use</button>
      </div>
    </div>
  );
};

export default Auth;
