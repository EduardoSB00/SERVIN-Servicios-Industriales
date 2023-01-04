import AboutUsHeader from "./AboutUs_Components/AboutUsHeader";
import MisionVision from "./AboutUs_Components/MisionVision";
import OurStory from "./AboutUs_Components/OurStory";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import HomePartners from "./HomePartners";


const AcercaDe = () => {
    return ( 
        <div className="acerca-de__container">
            <Navbar2/>
            <AboutUsHeader/>
            <OurStory/>
            <MisionVision/>
            <HomePartners/>
            <Footer/>
        </div>
     );
}
 
export default AcercaDe;