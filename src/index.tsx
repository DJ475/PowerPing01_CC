import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import "./UI_Components/Dashboard_UI/MainDiv.css"
import "./UI_Components/Dashboard_UI/InnerDiv.css"

import "./UI_Components/Shared_Components/NavBar.css";

import "./UI_Components/Login_UI/LoginPage.css";
import "./UI_Components/Login_UI/ButtonContainer.css";

import "./UI_Components/Shared_Components/MainPageLayout.css"

import "./UI_Components/ResetPassword_UI/ParentContainer.css"
import "./UI_Components/ResetPassword_UI/FormTop.css"
// Form Bottom uses specialized tailwind components so its included in FormBottom.tsx instead of here in index.tsx


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
