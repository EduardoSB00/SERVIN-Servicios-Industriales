import Footer from "../Footer";
import Navbar2 from "../Navbar2";
import ProjectGroup from "./ProjectGroup";
import ProjectsHeader from "./ProjectsHeader";

const Projects = () => {
    return ( 
        <div className="projects__container">
            <Navbar2/>
            <ProjectsHeader/>
            <ProjectGroup/>
            <Footer/>

        </div>
     );
}
 
export default Projects;