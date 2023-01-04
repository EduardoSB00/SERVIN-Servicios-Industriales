const HomeAboutUs = () => {
    return ( 
        <div className="home-about-us__container">
            <img src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="home-about-us__img" />
            <div className="home-about-us__info-container">
                <div className="home-about-us__info">
                    <div className="title-container">
                        <div className="title-deco bg-secondary d-inline-block"></div>
                        <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Contactanos</h3>
                        <div className="title-deco bg-secondary d-inline-block"></div>
                    </div>
                    <p className="home-about-us__content opacity-75">Para todas tus consultas estamos a su disponibilidad para responder toda duda que se le pueda presentar. Le invitamos a contactarnos por cualquiera de los métodos provistos donde encontrara una respuesta en brevedad.</p>
                    <a href="/Contacto"><button className="btn btn-outline-primary rounded-pill">Ver Mas</button></a>
                </div>
            </div>
        </div>
     );
}
 
export default HomeAboutUs;