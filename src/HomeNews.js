import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/Firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState, useEffect } from "react";
import HomeNewsCard from './HomeNewsCard';



const HomeNews = () => {

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
        setInfoProjects(list.sort(function (a, b) {  return new Date(b.Date) - new Date(a.Date);  }));
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getProjects();

        },[]);

    const barElements = 3;

    const [barEvents, setBarEvents] = useState("");

    useEffect(()=>{
        const bridge = [];
        if(infoProjects){
            for (let i = barElements -1; i>=0 ;i--){
                bridge.unshift(infoProjects[i]);
            }
            setBarEvents(bridge);
        }

    },[infoProjects])


    return ( 
        <div className="home-news__container">
            <div className="title-container">
                <div className="title-deco bg-secondary d-inline-block"></div>
                <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Proyectos Recientes</h3>
                <div className="title-deco bg-secondary d-inline-block"></div>
            </div>
                    
            {barEvents[0] && <div className="home-news__card-container ">
                <div class="card-group d-flex justify-content-center flex-wrap">
                    {console.log(barEvents)}
                    {barEvents.map((project)=>(
                        <div class="card custom-card">
                            <a href={"/Proyectos/"+project.id}>
                               <HomeNewsCard info={project}/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>}
            <a href="/Proyectos">
                <button className="btn btn-outline-primary rounded-pill d-block m-auto">Todas Los Proyectos</button> 
            </a>
            
        </div>
        
     );
}
 
export default HomeNews;