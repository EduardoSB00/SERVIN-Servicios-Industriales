import firebase from 'firebase/compat/app';
import firebaseConfig from "../Firebase/Firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useState, useEffect } from "react";
import ProjectSubCard from './ProjectSubCard';


const ProjectGroup = () => {

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

        useEffect(()=>{
            console.log(infoProjects);
    
            },[infoProjects]);

  


    return ( 
        <div className="project-group__container">
            <div className="title-container2">
                <div className="title-deco bg-secondary d-inline-block"></div>
                <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Todos Los Proyectos</h3>
                <div className="title-deco bg-secondary d-inline-block"></div>
            </div>

            <div className="home-news__card-container ">
                <div className="project-group__card-group flex-wrap d-flex justify-content-center">

                    {infoProjects.map((project)=>(
                        <div className="card custom-card">
                            <ProjectSubCard info={project}/>
                        </div> 
                    ))
                    }
                </div>
            </div>


        </div>
     );
}
 
export default ProjectGroup;