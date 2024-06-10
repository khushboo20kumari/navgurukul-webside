import './App.css';
import Footer from './Pages/Footer';
import SchoolsPage from './Pages/OurSchools';
import Navbar from "./Pages/Component/Navbar";
import PlacementCom from "./Pages/Placement";
import AlumnusNavgurukul from './Pages/AlumnusNavgurukul';
// import SocailMedia from './Pages/SocialMedia';
import FacilitiesatNavGurukul from './Pages/FacilitiesatNavGurukul';
import DigitalInitiatives from './Pages/DigitalInitiatives';
import Home from "./Pages/Component/Home";
import OurSupporters from './Pages/OurSupporters';
// import Navbar from './Pages/Navbar';
import SocailMedia from './Pages/SocialMedia';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <PlacementCom></PlacementCom>
      <SchoolsPage></SchoolsPage>
      <DigitalInitiatives></DigitalInitiatives>
      <FacilitiesatNavGurukul></FacilitiesatNavGurukul>
      <SocailMedia></SocailMedia>
      <OurSupporters></OurSupporters>
      <AlumnusNavgurukul></AlumnusNavgurukul>
      <Footer></Footer>

      

    </div>
  );
}

export default App;
