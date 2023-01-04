import Footer from "../Footer";
import Navbar2 from "../Navbar2";

import { useState } from "react";
import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import firebaseConfig from "../Firebase/Firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc, deleteDoc } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import {ref, uploadBytes, deleteObject} from "firebase/storage"

const GlobalEdit = () => {

    const password = "Servin2022";

    function handlePassword(e){
        e.preventDefault();

        if(passwordValue == password){
            setPasswordVis("none");
        }


    }

    const [passwordVis,setPasswordVis] = useState("flex");
    const [passwordValue,setPasswordvalue] = useState("");

    const [Date,setDate] = useState("");
    const [Description,setDescription] = useState("");
    const [State,setState] = useState("");
    const [Title,setTitle] = useState("");
    const [Image,setImage] = useState("");
    const [selectedProject,setSelectedProject] = useState();

    function handleStateReset() {
        setDate("");
        setDescription("");
        setState("");
        setTitle("");
        setImage("");
        setSelectedProject("");
    }

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

    const [infoProjects,setInfoProjects] = useState([]);

    const singleProjectInfo = infoProjects.filter((event)=>(event.Title === selectedProject))[0];

    function handleSelectProject(){
     if(singleProjectInfo){  setDate(singleProjectInfo.Date);
        setDescription(singleProjectInfo.Description);
        setState(singleProjectInfo.State);
        setTitle(singleProjectInfo.Title);}
    }

    useEffect(()=>{handleSelectProject()},[selectedProject])


//-------------------------------------------------------------------------------------------------------------------//

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
    const db = firebase.firestore();
    let ev ;

const uploadProject = async () => {
    const obj = {Date: Date, Description: Description, State: State, Title: Title, img: "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"};
    const dbRef = await db.collection("Proyectos").add(obj);
};

const deleteProject = async () => {
    await deleteDoc(doc(db, "Proyectos", singleProjectInfo.id));
};

const updateProject = async () => {
    const obj = {Date: Date, Description: Description, State: State, Title: Title, img: "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"};
    db.collection("Proyectos").doc(singleProjectInfo.id).update({Date: Date, Description: Description, State: State, Title: Title, img: "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg"});
};


function handleUpload(e){
    e.preventDefault();
    uploadProject();
    uploadProjectImage();
    handleStateReset();

}

function handleErase(e){
    e.preventDefault();
    deleteProject();
    deleteProjectImage();
    handleStateReset();

}

function handleUpdate(e){
    e.preventDefault();
    updateProject();
    uploadProjectImage();
    handleStateReset();

}

const storage = getStorage();

function uploadProjectImage(){
    if(Image == null) return;
    const newTitle =  Title.replace(/ /g, '')
    const imageRef = ref(storage, "Proyectos/" + newTitle);
    if(Image){
        uploadBytes(imageRef, Image).then(()=>{
            alert("image uploaded");
        })
    }

}

function deleteProjectImage(){
    const newTitle =  Title.replace(/ /g, '')
    const imageRef = ref(storage, "Proyectos/" + newTitle);
    deleteObject(imageRef).then(()=>{
        alert("file deleted");
    }).catch((error)=>{
        alert("There was an error with the upload");
    })

}



    return ( 
        <div className="global-edit__container">
            <div className="global-edit__password-container" style={{display:passwordVis}}> 
                <div className="title-container">
                    <div className="title-deco bg-secondary d-inline-block"></div>
                    <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Introduzca Contraseña</h3>
                    <div className="title-deco bg-secondary d-inline-block"></div>
                </div>

                <form onSubmit={handlePassword}>
                    <input type="password" placeholder="Contraseña" className="global-edit__password-input" value={passwordValue} onChange={(event)=>{setPasswordvalue(event.target.value)}}/>
                    <button className="btn btn-outline-primary rounded-pill d-block m-auto">Ingresar</button>
                </form>

            </div>
            <Navbar2/>

            <div className="global-edit__editor-container d-flex flex-column align-items-center">
                <div className="title-container">
                    <div className="title-deco bg-secondary d-inline-block"></div>
                    <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Añadir un Proyecto</h3>
                    <div className="title-deco bg-secondary d-inline-block"></div>
                </div>

                <form className=" global-edit__form d-flex flex-column align-items-center" onSubmit={handleUpload}>
                    <label className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Titulo</p>
                        <input type="text" className="global-edit__input" value={Title} onChange = {(event)=>{setTitle(event.target.value)}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Imagen</p>
                        <input type="file" onChange={(event) => {setImage(event.target.files[0])}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Fecha</p>
                        <input type="date" className="global-edit__input" value={Date} onChange = {(event)=>{setDate(event.target.value)}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Estado</p>
                        <select value={State} onChange = {(event)=>{setState(event.target.value)}}>
                            <option value="Actual">Actual</option>
                            <option value="">Finalizado</option>
                        </select>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Descripcion</p>
                        <textarea cols="30" rows="10" className="global-edit__input" value={Description} onChange = {(event)=>{setDescription(event.target.value)}}></textarea>
                    </label>

                    <button className="btn btn-outline-primary rounded-pill">Subir</button>

                </form>

                <div className="title-container">
                    <div className="title-deco bg-secondary d-inline-block"></div>
                    <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Editar un Proyecto</h3>
                    <div className="title-deco bg-secondary d-inline-block"></div>
                </div>

                <form className="global-edit__form d-flex flex-column align-items-center" onSubmit={handleUpdate}>

                    <label className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Proyecto</p>
                        <select value ={selectedProject} onChange={(event)=>{setSelectedProject(event.target.value)}} >
                            <option value="">-Seleccionar un Evento-</option>
                                {infoProjects.map((event)=>(
                            <option value={event.Title}>{event.Title}</option>
                                ))}
                        </select>
                    </label>

                    <label className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Titulo</p>
                        <input type="text" className="global-edit__input" value={Title} onChange = {(event)=>{setTitle(event.target.value)}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Imagen</p>
                        <input type="file" onChange={(event) => {setImage(event.target.files[0])}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Fecha</p>
                        <input type="date" className="global-edit__input" value={Date} onChange = {(event)=>{setDate(event.target.value)}}/>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Estado</p>
                        <select value={State} onChange = {(event)=>{setState(event.target.value)}}>
                            <option value="Actual">Actual</option>
                            <option value="">Finalizado</option>
                        </select>
                    </label>

                    <label  className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Descripcion</p>
                        <textarea cols="30" rows="10" className="global-edit__input" value={Description} onChange = {(event)=>{setDescription(event.target.value)}}></textarea>
                    </label>


                    <button className="btn btn-outline-primary rounded-pill">Subir</button>

                </form>

                <div className="title-container">
                    <div className="title-deco bg-secondary d-inline-block"></div>
                    <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Borrar un Proyecto</h3>
                    <div className="title-deco bg-secondary d-inline-block"></div>
                </div>

                <form className=" global-edit__form d-flex flex-column align-items-center" onSubmit={handleErase}>

                    <label className="global-edit__input-container">
                        <p className="fw-bold h5 opacity-75">Proyecto</p>
                        <select value ={selectedProject} onChange={(event)=>{setSelectedProject(event.target.value)}} >
                            <option value="">-Seleccionar un Evento-</option>
                                {infoProjects.map((event)=>(
                            <option value={event.Title}>{event.Title}</option>
                                ))}
                        </select>
                    </label>

                    <button className="btn btn-outline-primary rounded-pill">Borrar</button>
                </form>

                <Footer/>
            </div>
        </div>
     );
}
 
export default GlobalEdit;