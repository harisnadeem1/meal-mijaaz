import React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConditionsPage from './pages/ConditionsPage';
import PackagesPage from './pages/PackagesPage';
import RecipesPage from './pages/RecipesPage';
import BookCallPage from './pages/BookCallPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import PrivacyPage from './pages/PrivacyPage';
import DisclaimerPage from './pages/DisclaimerPage';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex min-h-[100dvh] flex-col">
                <Header />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/conditions" element={<ConditionsPage />} />
                        <Route path="/packages" element={<PackagesPage />} />
                        <Route path="/recipes" element={<RecipesPage />} />
                        <Route path="/book" element={<BookCallPage />} />
                        <Route path="/book-call" element={<BookCallPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/reviews" element={<ReviewsPage />} />
                        <Route path="/privacy" element={<PrivacyPage />} />
                        <Route path="/disclaimer" element={<DisclaimerPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
                <Footer />
            </div>
            <Toaster position="top-center" />
        </Router>
    );
}

export default App;
