const HomePartners = () => {
    return ( 
        <div className="home-partners__containers">
                    <div className="title-container">
                        <div className="title-deco bg-secondary d-inline-block"></div>
                        <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Empresas Asociadas</h3>
                        <div className="title-deco bg-secondary d-inline-block"></div>
                    </div>
            
            <div className="home-partners__logo-container d-flex flex-wrap justify-content-around">
                <img src="/imgs/Logo_DS_construcciones-removebg-preview.png" alt="" className="home-partners__logo" />
                <img src="/imgs/Novachem Logo.jpg" alt="" className="home-partners__logo" />
                <img src="/imgs/Servin-Logo.png" alt="" className="home-partners__logo" />

            </div>
        </div>
     );
}
 
export default HomePartners;

