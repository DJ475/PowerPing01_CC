import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import { LoginPage } from './UI_Components/Login_UI/LoginPage';
import { ResetPasswordPage } from "./UI_Components/ResetPassword_UI/ResetPswdPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}> </Route>
        <Route path="/forgotPassword" element={<ResetPasswordPage/>}></Route>
      </Routes>
  );
}

export default App;
