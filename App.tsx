
import React from 'react';
import { useStore, AppProvider } from './store';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Auth from './pages/Auth';
import AIAssistant from './pages/AIAssistant';

const AppContent: React.FC = () => {
  const { view, user } = useStore();

  const renderView = () => {
    // Protected routes could go here
    if (!user && (view === 'ORDERS' || view === 'CHECKOUT')) return <Auth />;

    switch (view) {
      case 'HOME': return <Home />;
      case 'PRODUCTS': return <ProductList />;
      case 'PRODUCT_DETAIL': return <ProductDetail />;
      case 'CART': return <Cart />;
      case 'CHECKOUT': return <Checkout />;
      case 'ORDERS': return <Orders />;
      case 'AUTH': return <Auth />;
      case 'AI_ASSISTANT': return <AIAssistant />;
      default: return <Home />;
    }
  };

  return (
    <Layout>
      {renderView()}
    </Layout>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
