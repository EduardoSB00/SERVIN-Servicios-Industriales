const ImgHeader = () => {
    return ( 
        <div className="header__container">
            <img src="https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1531&q=80" alt="" className="header__img" />
            <div className="header__info">
                <img src="/imgs/Servin-Logo1-White.png" alt="" className="header__logo mx-auto" />
                <h1 className="header__title display-5 text-center fw-bold text-light text-shadow">Servicios Industriales</h1>
                <hr className="header__divisor mx-auto border-light border border-1" />
                <h2 className="header__subtitle display-2 text-center fw-bold text-light text-shadow">La Solucion A Todas Tus Necesidades!</h2>
                <div className="header__btn-container">
                    <a href="/Acerca_De"> 
                        <button className="header__btn">Ver Mas</button>
                    </a>
                </div>
            </div>

        </div>
     );
}
 
export default ImgHeader;   