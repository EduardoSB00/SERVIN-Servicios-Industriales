import { useRef, useEffect, useState } from "react";


const HomeServices = () => {

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [top,setTop] = useState("100px");


    const serviceCardRef = useRef();

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setVisibility(entry.isIntersecting);
            
        })
        observer.observe(serviceCardRef.current);       
    },[]);

 

    useEffect(()=>{
        if(visibility){
            setOpacity(1);
            setTop("0px");
        }
    },[visibility]);


    return ( 
        <div className="home-services__container">
            <div className="title-container">
                <div className="title-deco bg-secondary d-inline-block"></div>
                <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Nuestros Servicios</h3>
                <div className="title-deco bg-secondary d-inline-block"></div>
            </div>
            <p className="home-services__content text-center">Con el objetivo de facilitar le resolución de los problemas de todos nuestros clientes, es de nuestro mayor interés contar con una gran diversificación de servicios, todos implementados con calidad asegurada. Garantizamos una ejecución pronta y eficaz de todas las opciones presentadas. En caso de requerir un servicio adicional, se puede comunicar con nosotros para discutir la viabilidad de la solicitud.</p>
            <div className="home-services__card-container d-flex flex-wrap justify-content-center">
                <a href="/Servicios">
                    <div ref={serviceCardRef} className="home-services__card" style={{opacity: opacity, position: "relative", top: top}}>
                        <div className="home-services__top bg-primary opacity-75 d-flex justify-content-center align-items-center flex-column">
                            <i className="service-icon text-light fa-solid fa-gear"></i>
                            <h4 className="home-services__card-title text-light">Placeholder Title</h4>
                        </div>
                        <p className="home-services__card-content opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus exercitationem fuga. Dolore accusantium, hic magnam obcaecati omnis eius beatae aliquam esse sint deleniti mollitia quas rerum quos accusamus vitae.</p>
                    </div>
                </a>
                

                <a href="/Servicios">
                    <div className="home-services__card" style={{opacity: opacity, position: "relative", top: top}}>
                        <div className="home-services__top bg-secondary opacity-75 d-flex justify-content-center align-items-center flex-column">
                            <i className="service-icon text-light fa-solid fa-gear"></i>
                            <h4 className="home-services__card-title text-light">Placeholder Title</h4>
                        </div>
                        <p className="home-services__card-content opacity-75"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perspiciatis incidunt deleniti esse pariatur architecto hic aliquid dolor praesentium amet iste facere vel a in ab aliquam, optio eos sit?</p>
                    </div>    
                </a>
                

                <a href="/Servicios">
                    <div className="home-services__card" style={{opacity: opacity, position: "relative", top: top}}>
                        <div className="home-services__top bg-info opacity-75 d-flex justify-content-center align-items-center flex-column">
                            <i className="service-icon text-light fa-solid fa-gear"></i> 
                            <h4 className="home-services__card-title text-light">Placeholder Title</h4>
                        </div>
                        <p className="home-services__card-content opacity-75">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos voluptates sunt assumenda, eos, qui facilis culpa omnis aut adipisci, dolores quod optio vel possimus rem facere totam neque odit ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, amet mollitia fugiat eligendi ratione inventore aliquid facilis nihil ad debitis repellat nulla culpa harum sequi qui. Nihil facere perferendis voluptate.</p>
                    </div>    
                </a>
                
            </div>
            <a href="/Servicios">
                <button className="btn btn-outline-primary d-block m-auto rounded-pill">Todos Los Servicios</button>
            </a>

        </div>
     );
}
 
export default HomeServices;