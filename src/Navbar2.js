import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navbar2 = () => {
    return ( 
        <div className="navbar2__container">
            <Navbar bg="dark" expand="lg" className="navbar-dark" style={{position: "relative", zIndex: 10}}>
                <Container>
                    <Navbar.Brand href="/"><img src='/imgs/Servin-Logo-White.png' height="70"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" className='fw-bold'>Inicio</Nav.Link>
                        <Nav.Link href="/Acerca_De" className='fw-bold'>Empresa</Nav.Link>
                        <NavDropdown title="Servicios" id="basic-nav-dropdown" className='fw-bold'>
                            <NavDropdown.Item href="/Servicios/Transporte_de_Químicos">Transporte de Químicos</NavDropdown.Item>
                            <NavDropdown.Item href="/Servicios/Obras_Civiles">Obras Civiles</NavDropdown.Item>
                            <NavDropdown.Item href="/Servicios/Instalación_de_Equipo_Industrial">Instalación de Equipo Industrial</NavDropdown.Item>
                            <NavDropdown.Item href="/Servicios/Reciclado_de_Embalaje,_Barriles_,_IBC">Reciclado de Embalaje, Barriles , IBC</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/Servicios">Todos los Servicios</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Proyectos" className='fw-bold'>Proyectos</Nav.Link>
                        <Nav.Link href="/Contacto" className='fw-bold'>Contacto</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Navbar2;