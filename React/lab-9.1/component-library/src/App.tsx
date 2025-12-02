import './App.css';
import React, { useState } from 'react';
import { AlertBox } from './components/AlertBox/AlertBox';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';

import type { UserProfileCardProps, ProductDisplayProps } from './types';
import type { User, Product, AlertType } from './types';

interface Alert {
  id: string;
  type: AlertType;
  message: string;
  children?: React.ReactNode;
}

function App() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const users: UserProfileCardProps['user'][] = [
    {
      id: '1',
      name: 'Amanda',
      email: '',
      role: 'Admin',
      avatarUrl: '',
    },
    {
      id: '2',
      name: 'Jack',
      email: 'jack@example.com',
      role: 'User',
      avatarUrl: '',
    },
  ];

  const products: ProductDisplayProps['product'][] = [
    {
      id: 'p1',
      name: 'Personal Computer',
      price: 1299.99,
      description: 'High performance personal computer Built with an AMD Ryzen 5 9600X3D processor and 5060 Ti graphics card. As well as 32GB of RAM and 1TB SSD storage.',
      imageUrl: '',
      inStock: true,
    },
    {
      id: 'p2',
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones',
      inStock: true,
    },
    {
      id: 'p3',
      name: 'Xbox Controller',
      price: 299.99,
      description: 'Xbox Controller for the New Generation Xbox Series X/S',
      inStock: false,
    },
  ];

  const addAlert = (alert: Alert) => {
    setAlerts((prev) => [...prev, alert]);
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const handleAddToCart = (productId: string) => {
    const alertId = `${productId}-${Date.now()}`;
    addAlert({
      id: alertId,
      type: 'success',
      message: `Product ${productId} added to cart!`,
    });
    console.log(`Added product ${productId}`);
  };

  const handleEditUser = (userId: string) => {
    const alertId = `${userId}-${Date.now()}`;
    addAlert({ id: alertId, type: 'info', message: `Editing user ${userId}` });
    console.log(`Editing user ${userId}`);
  };

  return (
  <div className="app-container">

    <div className="space-y-4 mb-6">
      {alerts.map((alert) => (
        <AlertBox
          key={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={() => removeAlert(alert.id)}
        >
          {alert.children}
        </AlertBox>
      ))}
    </div>

    <div className="card-grid">
      {users.map((user) => (
        <div className="card-item" key={user.id}>
          <UserProfileCard
            user={user}
            showEmail
            showRole
            onEdit={() => handleEditUser(user.id)}
          >
            <div className="text-sm text-gray-500">
              Last login: {Math.floor(Math.random() * 24) + 1} hours ago
            </div>
          </UserProfileCard>
        </div>
      ))}
    </div>

    <div className="card-grid">
      {products.map((product) => (
        <div className="card-item" key={product.id}>
          <ProductDisplay
            product={product}
            showDescription
            showStockStatus
            onAddToCart={product.inStock ? () => handleAddToCart(product.id) : undefined}
          >
            <div className="text-sm text-gray-500">Free shipping available</div>
          </ProductDisplay>
        </div>
      ))}
    </div>
  </div>
);
}

export default App;