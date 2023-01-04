const Footer = () => {
    return ( 
        <div className="footer__container">
            <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="footer__background"></img>
            <div className="footer__darken"></div>
            <div className="footer__content d-flex flex-column">
                <div className="footer__main-content d-flex justify-content-around flex-wrap">
                    <img src="/imgs/Servin-Logo-White.png" alt="" className="footer__logo"/>
                    <div className="footer__link-group d-flex">
                        <div className="footer__link-deco bg-secondary d-flex"></div>
                        <div className="footer__links d-flex flex-column">
                            <a href="/">INICIO</a>
                            <a href="/Acerca_De">EMPRESA</a>
                            <a href="/Servicios">SERVICIOS</a>
                            <a href="/Proyectos">PROYECTOS</a>
                       </div>
                    </div>
                    <div className="footer__link-group d-flex ">
                        <div className="footer__link-deco bg-secondary"></div>
                       <div className="footer__links d-flex flex-column">
                            <a href="/Contacto">CONTACTO</a>
                       </div>
                    </div>
                    <div className="footer__link-group2 d-flex ">
                       <div className="footer__links d-flex flex-column">
                            <p className="text-light"><i className=" text-secondary fa-sharp fa-solid fa-envelope"></i>serviciosindustrialesteg@gmail.com</p>
                            <p className="text-light"><i className=" text-secondary fa-sharp fa-solid fa-location-dot"></i>J25P+V3 Choloma</p>
                            <p className="text-light"><i className=" text-secondary fa-solid fa-phone"></i>+504 9438-9076</p>
                            <p className="text-light"></p>

                       </div>
                    </div>
                </div>
                <hr className="footer__division"/>
                <div className="footer__social d-flex flex-wrap">
                    <p className="text-secondary">SERVIN - Servicios Industriales S de R L</p>
                    <div className="footer__social-icons justify-content-end d-flex ">
                        <a href="mailto:serviciosindustrialesteg@gmail.com"><i className="fa-regular fa-envelope text-light"></i></a> 
                        <a href=""><i className="fa-brands fa-whatsapp text-light"></i></a>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Footer;