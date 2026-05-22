import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CultureResearch from './pages/CultureResearch';
import CultureDetail from './pages/CultureDetail';
import SecondLifeSystem from './pages/SecondLifeSystem';
import ScrollToTop from './components/ScrollToTop';
import FutureLab from './pages/FutureLab';
import ReportDetail from './pages/ReportDetail';
import Founder from './pages/Founder';
import CaseArchives from './pages/CaseArchives';
import Thoughts from './pages/Thoughts';
import ArticleDetail from './pages/ArticleDetail';
import PartnerShip from './pages/PartnerShip';
import Contact from './pages/Contact';
import Whitepaper from './pages/Whitepaper';
import CaseReportDetail from './pages/CaseReportDetail';

function NavigationGuard() {
  const location = useLocation();
  
  useEffect(() => {
    // Force release any stale scrolling locks and touch constraints during transitions
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    document.body.style.height = '';
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationGuard />
      <div className="noise-overlay" />
      <div className="bg-[#0a0a0a] text-[#d4d4d4] min-h-screen selection:bg-[#c5a059] selection:text-black flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/culture" element={<CultureResearch />} />
            <Route path="/living-system" element={<SecondLifeSystem />} />
            <Route path="/cases" element={<CaseArchives />} />
            <Route path="/cases/:slug" element={<CaseReportDetail />} />
            <Route path="/lab" element={<FutureLab />} />
            <Route path="/lab/:id" element={<ReportDetail />} />
            <Route path="/culture/:id" element={<CultureDetail />} />
            <Route path="/partnership" element={<PartnerShip />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:id" element={<ArticleDetail />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
