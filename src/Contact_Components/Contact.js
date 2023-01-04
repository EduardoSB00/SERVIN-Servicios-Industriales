import Footer from "../Footer";
import Navbar2 from "../Navbar2";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return ( 
        <div className="contact__container">
            <Navbar2/>
            <ContactHeader/>
            <ContactInfo/>
            <ContactForm/>
            <Footer/>
        </div>
     );
}
 
export default Contact;