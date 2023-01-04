import ServicesHeader from "./ServicesHeader";
import Navbar2 from "../Navbar2";
import ServicesCardGroup from "./ServicesCardGroup";
import Footer from "../Footer";



const Services = () => {
    return ( 
        <div className="services__container">
            <Navbar2/>
            <ServicesHeader/>
            <ServicesCardGroup/>
            <Footer/>
        </div>
     );
}
 
export default Services;