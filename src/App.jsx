import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import StatusPage from '@/pages/StatusPage';
import TermsPage from '@/pages/TermsPage';
import DiscountAlert from '@/components/DiscountAlert';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <DiscountAlert />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;