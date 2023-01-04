import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

const HomeNewsCard = (props) => {

    const storage = getStorage();
    const newTitle =  props.info.Title.replace(/ /g, '')
    const imageRef = ref(storage, "Proyectos/" + newTitle);
    const [thumbnail, setThumbnail]=useState("");

    getDownloadURL(imageRef).then((url)=>{
            setThumbnail(url);
        })

    return ( 
        <div>
            <img class="card-img-top card-img-top-custom" src={thumbnail} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title text-center card-title-custom text-primary">{props.info.Title}<span className="custom-badge badge bg-secondary">{props.info.State}</span></h5>
                <p class="card-text card-text-custom">{props.info.Description}</p>
            </div>
            <div class="card-footer bg-primary opacity-75">
                <small class="text-light">Publicado en: {props.info.Date}</small>
            </div>
        </div>
     );
}
 
export default HomeNewsCard;