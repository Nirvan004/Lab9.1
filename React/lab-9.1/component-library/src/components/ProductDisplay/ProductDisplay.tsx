import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  return (
    <div className="border p-4 rounded shadow-md">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 font-bold mb-2">${product.price.toFixed(2)}</p>
      
      {showDescription && (
        <p className="text-gray-600 mb-2">{product.description}</p>
      )}

      {showStockStatus && (
        <p
          className={`mb-2 ${
            product.inStock ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      )}

      {onAddToCart && product.inStock && (
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}

      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};