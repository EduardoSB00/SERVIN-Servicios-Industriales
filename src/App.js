import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AcercaDe from './AcercaDe';
import Contact from './Contact_Components/Contact';
import Services from './Services_Components/Services';
import ServiceInfo from './Services_Components/ServiceInfo';
import Projects from './Projects_Components/Projects';
import ProjectsInfo from './Projects_Components/ProjectsInfo';
import GlobalEdit from './GlobalEdit/GlobalEdit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/Acerca_De" element={<AcercaDe/>}/>   
          <Route path="/Contacto" element={<Contact/>}/>          
          <Route path="/Servicios" element={<Services/>}/>  
          <Route path="/Servicios/:id" element={<ServiceInfo/>}/>
          <Route path="/Proyectos" element={<Projects/>}/>  
          <Route path="/Proyectos/:id" element={<ProjectsInfo/>}/>  
          <Route path="/GlobalEdit" element={<GlobalEdit/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
