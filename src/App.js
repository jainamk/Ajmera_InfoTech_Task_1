import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css'; 
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (productId) => {
    setSelectedProduct(productId);
  };

  return (
    <div className="app-container">
      {/* Render the ProductList component with the onSelectProduct callback */}
      <ProductList onSelectProduct={handleSelectProduct} />

      {/* Render the ProductDetails component with the selectedProduct ID */}
      <ProductDetails productId={selectedProduct} />
    </div>
  );
};

export default App;
