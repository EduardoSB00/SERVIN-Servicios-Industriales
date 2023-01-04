const ServiceSubCard = (props) => {

    const serviceRoute = "/Servicios/" + props.info.Title.replace(/\s/gi,"_") ;

    return ( 

            <div className="card custom-card">
                <a href={serviceRoute}>
                    <img className="card-img-top card-img-top-custom" src={props.info.img} alt="Card image cap"/>
                    <div className="card-body">
                        <a href={serviceRoute}>
                            <h5 className="card-title text-center text-primary">{props.info.Title}<span className="custom-badge badge bg-secondary">{props.info.State}</span></h5>
                        </a>
                        <p className="card-text card-text-custom text-dark">{props.info.Description}</p>
                    </div>
                    <div className="card-footer bg-primary opacity-75">
                        <small className="text-light">Publicado en: {props.info.Date}</small>
                    </div>
                </a>
                
            </div>
   
     );
}
 
export default ServiceSubCard;