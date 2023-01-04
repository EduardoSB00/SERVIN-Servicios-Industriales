import Navbar1 from "./Navbar";
import ImgHeader from './ImgHeader';
import HomeMainCard from "./HomeMainCard";
import HomeAboutUs from "./HomeAboutUs";
import Footer from "./Footer";
import HomePartners from "./HomePartners";
import HomeNews from "./HomeNews";
import HomeServices from "./HomeServices";
import HomeMainInfo from "./HomeMainInfo";


const Home = () => {
    return ( 
        <div className="home__container">
            <Navbar1/>
            <ImgHeader/>
            <div className="home__main-card-container">
                <HomeMainCard color="primary"/>
                <HomeMainCard color="secondary"/>
                <HomeMainCard color="info"/>
            </div>
            <HomeMainInfo/>
            <HomeServices/>
            <HomeAboutUs/>

            <div className="mapouter"><div className="gmap_canvas"><iframe height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=choloma%20indelva&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
            <HomePartners/>
            <img src="https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="home-partners__img" />

            <HomeNews/>
            <Footer/>
        </div>
     );
}
 
export default Home;