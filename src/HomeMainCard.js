const HomeMainCard = (props) => {
    return ( 
        <div className="home-main-card__container">
            <div className="home-main-card__background">
                <div className={"home-main-card__info bg-"+props.color +" opacity-75"}>
                    <h3 className="home-main-card__title text-center text-light">This is a title that should be two lines</h3>
                    <hr className="home-main-card__divisor"/>
                    <p className="home-main-card__content text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatem quasi at delectus adipisci repudiandae accusamus soluta distinctio eaque earum, optio ducimus iure rem quos, nulla dolorem blanditiis voluptates sunt.</p>
                    <button className="btn btn-outline-light rounded-pill">Ver Mas</button>
                </div>
            </div>
            <a href="">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="home-main-card__img" />
            </a>
        </div>
     );
}
 
export default HomeMainCard;