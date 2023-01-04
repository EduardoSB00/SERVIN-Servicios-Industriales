const MisionVision = () => {
    return ( 
        <div className="mision-vision__container">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" alt="" className="mision-vision__img"/>
            <div className="mision-vision__card-group d-flex justify-content-center align-items-center">
                <div className="mision-vision__card mision-vision__card1 bg-light opacity-75">
                    <div className="title-container">
                        <div className="title-deco bg-secondary d-inline-block"></div>
                        <h3 className="home-news__title fw-bold text-center opacity-75 d-inline-block">Mision</h3>
                        <div className="title-deco bg-secondary d-inline-block"></div>
                    </div>
                    <p className="mision-vision__text text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio cupiditate explicabo sapiente blanditiis voluptatem facilis, voluptatibus ex nihil provident aliquid quaerat, at cum eaque reiciendis? Reprehenderit harum laboriosam praesentium.</p>
                </div>
                <div className="mision-vision__card mision-vision__card2 bg-dark opacity-75">
                    <div className="title-container">
                        <div className="title-deco bg-secondary d-inline-block"></div>
                        <h3 className="home-news__title fw-bold text-light text-center opacity-75 d-inline-block">Vision</h3>
                        <div className="title-deco bg-secondary d-inline-block"></div>
                    </div>
                    <p className="mision-vision__text text-light text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odio cupiditate explicabo sapiente blanditiis voluptatem facilis, voluptatibus ex nihil provident aliquid quaerat, at cum eaque reiciendis? Reprehenderit harum laboriosam praesentium.</p>
                </div>

            </div>
        </div>
     );
}
 
export default MisionVision;