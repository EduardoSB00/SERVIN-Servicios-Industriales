import { useRef, useEffect, useState } from "react";

const HomeMainInfo = () => {

    const [visibility,setVisibility] = useState("");
    const [opacity,setOpacity] = useState(0);
    const [left,setLeft] = useState("100px");


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
            setLeft("0px");
        }
    },[visibility]);

  

    return ( 
        <div className="home-main-info__container">
            <div className="title-container">
                <div className="title-deco bg-secondary d-inline-block"></div>
                <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Quienes Somos</h3>
                <div className="title-deco bg-secondary d-inline-block"></div>
            </div>
            <div className="home-main-info__info d-flex flex-wrap justify-content-center">
                <img src="https://images.unsplash.com/photo-1482731215275-a1f151646268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="home-main-info__img" />
                <div ref={mainCardRef} style={{opacity: opacity, position: "relative", left: left}} className="home-main-info__content bg-primary">
                    <div className="title-container">
                        <div className="title-deco bg-secondary d-inline-block"></div>
                        <h3 className="home-news__title fw-bold text-center opacity-100 d-inline-block text-secondary">Placeholder Title</h3>
                        <div className="title-deco bg-secondary d-inline-block"></div>
                    </div>
                    <p className="home-main-info__text text-light">llo facere labore in voluptate perferendis minus repellendus similique, dolores ut tempora, reiciendis illum incidunt neque laboriosam fugit. Exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum labore omnis fuga voluptatum voluptates veniam esse dolores voluptate. Rerum, temporibus impedit nam sequi molestias commodi ut repellat sunt laboriosam provident!</p>
                    <a href="/Acerca_De">
                        <button className="btn btn-outline-light rounded-pill d-block m-auto">Ver Mas</button>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default HomeMainInfo;