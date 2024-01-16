import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = ({ productId }) => {
  // State to manage the product details
  const [product, setProduct] = useState(null);


  // Effect hook to fetch product details when productId changes
  useEffect(() => {
  
    const fetchProductDetails = async () => {
      try {
        //Fetch details of the specified product from the API
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        // Set the fetched product details in the state
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    // Check if productId is provided before fetching details
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  // JSX structure for rendering the ProductDetails component
  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      {product ? (

        // Display product details if available
        <div>
          <p><span className='tags'>Title :</span> {product.title}</p>
          <p><span className='tags'>Description :</span> {product.description}</p>
          <p><span className='tags'>Price :</span>  ${product.price}</p>
          <p><span className='tags'>Category :</span> {product.category[0].toUpperCase()+product.category.slice(1)}</p>
          <p><p className='tags'>Image:</p> <img src={product.image} alt={product.title} /></p>
          <p><span className='tags'>Rating : </span> {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ) : (

        // Display a message when no product is selected
        <p>Select a product to view details.</p>
      )}
    </div>
  );
};

export default ProductDetails;
