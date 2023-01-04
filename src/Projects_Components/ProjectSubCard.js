import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";



const ProjectSubCard = (props) => {

    const storage = getStorage();
    const newTitle =  props.info.Title.replace(/ /g, '')
    const imageRef = ref(storage, "Proyectos/" + newTitle);

    const [thumbnail, setThumbnail]=useState("");

    getDownloadURL(imageRef).then((url)=>{
            setThumbnail(url);
        })

    return ( 
        <div>
            {thumbnail &&
            <div>
                <a href={"/Proyectos/" + props.info.id}>
                    <img className="card-img-top card-img-top-custom" src={thumbnail} alt="Card image cap"/>
                    <div className="card-body">
                        <a href={"/Proyectos/" + props.info.id}>
                            <h5 className="card-title text-center text-primary card-title-custom">{props.info.Title}<span className="custom-badge badge bg-secondary">{props.info.State}</span></h5>
                        </a>
                        <p className="card-text card-text-custom">{props.info.Description}</p>
                    </div>
                    <div className="card-footer bg-primary opacity-75">
                        <small className="text-light">Publicado en: {props.info.Date}</small>
                    </div>
                </a>
                
            </div>}
            
        </div>
     );
}
 
export default ProjectSubCard;