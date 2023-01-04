const ContactHeader = () => {
    return ( 
        <div className="contact-header__container">
            <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s" className="about-us-header-img"></img>
            <div className="about-us-header__content">
                <h2 className="about-us-header-title text-light text-center">Entra en Contacto!</h2>
                <hr className="about-us-header__divisor border-secondary opacity-100" />
                <p className="about-us-header__text text-light text-center">Para todas tus consultas estamos a su disponibilidad para responder toda duda que se le pueda presentar. Le invitamos a contactarnos por cualquiera de los métodos provistos donde encontrara una respuesta en brevedad.</p>
            </div>
        </div>
     );
}
 
export default ContactHeader;