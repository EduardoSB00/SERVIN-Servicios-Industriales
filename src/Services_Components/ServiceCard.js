const ServiceCard = (props) => {
   
    const serviceRoute = "/Servicios/" + props.info.title.replace(/\s/gi,"_") ;
   
    return (         
        <div className="service-card__super-container">
            <div className="service-card__container d-flex flex-column">
                <img className="service-card__img" src={props.info.img} alt="" />
                <h3 className="service-card__title text-center fw-bold h4">{props.info.title}</h3>
                <p className="service-card__description">{props.info.description}</p>
            
            </div>
            <a href={serviceRoute} className="justify-self-end" >
                <div className="service-card__footer bg-primary d-flex align-items-center justify-content-center">
                    <p className="service-card__footer-text text-light text-center">Ver Mas</p>
                </div>
            </a>
        </div>
     );
}
 
export default ServiceCard;