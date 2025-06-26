
import './App.css';
import Topnav from './components/TopNav';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import SmallTopnav from "./components/SmallTopNav";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Topnav />
      <SmallTopnav />
      <MainSection />
      <AboutMe />
      <Skills />
      <Certificates/>
      <Footer />
    </>
  )
}

function ContectMePage() {
  return (
    <>
      <Topnav />
      <SmallTopnav />
      <ContactPage />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div>


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Portfolio' element={<HomePage />} />
          <Route path='/contact' element={<ContectMePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
