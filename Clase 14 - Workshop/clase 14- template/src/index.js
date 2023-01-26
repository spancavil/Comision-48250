import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import ShopProvider from './context/ShopProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  // </React.StrictMode>
);
