const ServicesHeader = () => {
    return ( 
        <div className="services-header__container">
            <img src="https://images.unsplash.com/photo-1469389335181-2198b4caa734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80" className="about-us-header-img"></img>
            <div className="about-us-header__content">
                <h2 className="about-us-header-title text-light text-center">Nuestros Servicios</h2>
                <hr className="about-us-header__divisor border-secondary opacity-100" />
                <p className="about-us-header__text text-light text-center">Con el objetivo de facilitar le resolución de los problemas de todos nuestros clientes, es de nuestro mayor interés contar con una gran diversificación de servicios, todos implementados con calidad asegurada. Garantizamos una ejecución pronta y eficaz de todas las opciones presentadas. En caso de requerir un servicio adicional, se puede comunicar con nosotros para discutir la viabilidad de la solicitud.</p>
            </div>
        </div>
     );
}
 
export default ServicesHeader;