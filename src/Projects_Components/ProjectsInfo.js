import Navbar2 from "../Navbar2";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import firebase from 'firebase/compat/app';
import firebaseConfig from "../Firebase/Firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState, useEffect } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";



const ProjectsInfo = () => {
        const {id} = useParams();

        const [infoProjects,setInfoProjects] = useState([]);

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }
          
            const db = firebase.firestore();
            let ev ;
    
        const getProjects = async () => {
            let obj;
            let list = []; 
            const querySnapshot = await db.collection("Proyectos").get();
            querySnapshot.forEach((doc) => {
            obj = doc.data();
            obj.id = doc.id;
                list.push(obj);
            });
            setInfoProjects(list);
            ev= querySnapshot[0];
        };
    
        useEffect(()=>{
            getProjects();
    
            },[]);
    
        const [realInfo,setRealInfo] = useState(null);

        useEffect(()=>{
            setRealInfo(infoProjects.filter((project)=>(project.id == id))[0])
        },[infoProjects]);
    

        const [thumbnail, setThumbnail]=useState("");
    

        useEffect(()=>{
            handelImage(); 
        },[realInfo]);

        
        function handelImage(){
            const storage = getStorage();
            if(realInfo){
                const newTitle =  realInfo.Title.replace(/ /g, '')
                const imageRef = ref(storage, "Proyectos/" + newTitle);
                getDownloadURL(imageRef).then((url)=>{
                    setThumbnail(url);
                })
            }    
        }
    
        return ( 
            <div className="service-info_container">
                <Navbar2/>
    
                {(realInfo && thumbnail) &&
                <div>
                    <img src={thumbnail} alt="" className="service-info__img" />
                    <div className="service-info__subcontainer d-flex flex-column">
                        <h2 className="service-info__title fw-bold h1 text-primary">{realInfo.Title}</h2>
                        <hr className="service-info__divisor border-primary" />
                        <p className="service-info__update-date text-info align-self-end fw-bold opacity-50">Ultima vez actualizado: {realInfo.Date}</p>
                        <p className="service-info__content">{realInfo.Description}</p>
                        <a href="/Proyectos">
                            <button className="btn btn-outline-primary btn-large mx-auto d-block rounded-pill">Regresar a Proyectos</button>
                        </a>
                    </div>
                </div>
                }
    
                <Footer/>
            </div>
         ); 
            
     
 
}
 
export default ProjectsInfo;