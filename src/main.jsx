import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import App from './App.jsx';
import { ToastProvider } from './utils/Toast.jsx';
import { AuthProvider } from './utils/AuthContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Work from './pages/Work.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import RPADashboard from './pages/rpa/RPADashboard.jsx';
import DynamicForm from './pages/rpa/DynamicForm.jsx';
import InvoiceTable from './pages/rpa/InvoiceTable.jsx';
import WaitTest from './pages/rpa/WaitTest.jsx';
import ShadowDom from './pages/rpa/ShadowDom.jsx';
import RetroERP from './pages/rpa/RetroERP.jsx';
import PopupMinefield from './pages/rpa/PopupMinefield.jsx';
import IframeInception from './pages/rpa/IframeInception.jsx';
import DragDrop from './pages/rpa/DragDrop.jsx';
import TwoFASprint from './pages/rpa/TwoFASprint.jsx';

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route element={<App />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/rpa" element={<RPADashboard />} />
              <Route path="/rpa/dynamic-form" element={<DynamicForm />} />
              <Route path="/rpa/invoice-table" element={<InvoiceTable />} />
              <Route path="/rpa/wait-test" element={<WaitTest />} />
              <Route path="/rpa/shadow-dom" element={<ShadowDom />} />
              <Route path="/rpa/retro-erp" element={<RetroERP />} />
              <Route path="/rpa/popup-minefield" element={<PopupMinefield />} />
              <Route path="/rpa/iframe-inception" element={<IframeInception />} />
              <Route path="/rpa/drag-drop" element={<DragDrop />} />
              <Route path="/rpa/2fa-sprint" element={<TwoFASprint />} />
            </Route>
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
