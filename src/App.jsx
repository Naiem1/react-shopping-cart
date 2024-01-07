import Header from './components/header/Header';
import Hero from './components/hero-section/Hero';
import ProductSection from './components/product-section/ProductSection';
import Sidebar from './components/sidebar/Sidebar';
import { CartProvider } from './state/context/cartContext';
import { ToggleProvider } from './state/context/toggleContext';

const App = () => {
  return (
    <div>
      <CartProvider>
        <ToggleProvider>
          <Header />
          <Sidebar />
        </ToggleProvider>
        <Hero />
        <ProductSection />
      </CartProvider>
    </div>
  );
};

export default App;
