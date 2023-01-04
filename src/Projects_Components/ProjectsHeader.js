const ProjectsHeader = () => {
    return ( 
        <div className="projects-header__container">
            <div className="contact-header__container">
                <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="about-us-header-img"></img>
                <div className="about-us-header__content">
                    <h2 className="about-us-header-title text-light text-center">Nuestros Proyectos</h2>
                    <hr className="about-us-header__divisor border-secondary opacity-100" />
                    <p className="about-us-header__text text-light text-center">Tenemos amplia experiencia en múltiples disciplinas y tenemos los resultados para demostrarlo! Varios de nuestros trabajos se pueden encontrar en esta sección donde se podrá apreciar los habilidosos acabados de nuestros proyectos así como detalladas descripciones de nuestra metodología y aquellos requerimientos propios para definir la finalización de un proyecto.</p>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsHeader;