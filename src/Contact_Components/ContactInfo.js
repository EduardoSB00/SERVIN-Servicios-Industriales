import { useRef, useEffect, useState } from "react";

const ContactInfo = () => {

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [top,setTop] = useState("100px");


    const mainCardRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisibility(entry.isIntersecting);
            
        })
        observer.observe(mainCardRef.current);       
    },[]);

 

    useEffect(()=>{
        if(visibility){
            setOpacity(0.75);
            setTop("0px");
        }
    },[visibility]);


    return ( 
        <div className="contact-info__container d-flex justify-content-center flex-wrap">

            <div className="title-container2">
                <div className="title-deco bg-secondary d-inline-block"></div>
                <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Placeholder Title</h3>
                <div className="title-deco bg-secondary d-inline-block"></div>
            </div>

            <div className="contact-info__group" ref={mainCardRef} style={{position:"relative", opacity: opacity, top: top}}>
                <i className="fa-solid fa-envelope text-primary contact-info__icon"></i>
                <p className="contact-info__content text-primary fw-bold opacity-50 text-center">Envia un Correo</p>
                <p className="contact-info__content text-primary fw-bold opacity-50 text-center">serviciosindustrialesteg@gmail.com</p>
            </div>

            <div className="contact-info__group" style={{position:"relative", opacity: opacity, top: top}}>
                <i className="fa-sharp fa-solid fa-location-dot text-primary contact-info__icon"></i>
                <p className="contact-info__content text-primary fw-bold text-center opacity-50">Encuantranos en</p>
                <p className="contact-info__content text-primary fw-bold text-center opacity-50">J25P+V3 Choloma</p>
            </div>

            <div className="contact-info__group" style={{position:"relative", opacity: opacity, top: top}}>
                <i className="fa-solid fa-phone text-primary contact-info__icon"></i>
                <p className="contact-info__content text-primary fw-bold opacity-50 text-center">Llamanos!</p>
                <p className="contact-info__content text-primary fw-bold opacity-50 text-center">+504 9438-9076</p>
            </div>

        </div>
     );
}
 
export default ContactInfo;