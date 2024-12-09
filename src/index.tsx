import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Toaster } from './components/ui/toaster';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Toaster />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
