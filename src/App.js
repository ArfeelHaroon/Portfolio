
import './App.css';
import Topnav from './components/TopNav';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import SmallTopnav from "./components/SmallTopNav";

     function App() {
       return (
         <div>
           <Topnav/>
           <SmallTopnav/>
           <MainSection/>
           <AboutMe/>
           <Skills/>
           <Footer/>
         </div>
       );
     }

export default App;
