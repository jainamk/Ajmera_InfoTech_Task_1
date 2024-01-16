import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ProductList.css";

const ProductList = ({ onSelectProduct }) => {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error message
  const [products, setProducts] = useState([]); // State to manage products  data

  // Effect hook to fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetching data from the API
        const response = await axios.get("https://fakestoreapi.com/products/");
        // Set the fetched products in the state
        setProducts(response.data);
      } catch (error) {
        // Handle errors during API request
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    // Invoke the fetchProducts function
    fetchProducts();
  }, []);

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {loading ? (
        // Display loading message while fetching data
        <p>Loading...</p>
      ) : error ? (
        // Display error message if there is an issue fetching data
        <p>{error}</p>
      ) : (
        // Display the list of products if data is successfully fetched
        <ul>
          {products.map((product) => (
            <li key={product.id} onClick={() => onSelectProduct(product.id)}>
              <p>{product.title}</p>
              <span>{product.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
