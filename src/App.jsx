import Header from './components/header/Header';
import Hero from './components/hero-section/Hero';
import ProductSection from './components/product-section/ProductSection';
import Sidebar from './components/sidebar/Sidebar';
import { ToggleProvider } from './state/context/toggleContext';

const App = () => {
  return (
    <div>
      <ToggleProvider>
        <Header />
        <Sidebar />
      </ToggleProvider>
      <Hero />
      <ProductSection />
    </div>
  );
};

export default App;
