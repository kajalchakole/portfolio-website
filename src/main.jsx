import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/variables.css'
import "./styles/global.css";
import App from './app/App.jsx'
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)