import Navbar2 from "../Navbar2";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const ServiceInfo = () => {

    const {id} = useParams();

    
    const serviceInfo = [
        {
            Title: "Transporte de Químicos",
            img:"https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            Date: "14 de febrero del 2022",
            State:"",
            Description: "Lorem ipsum dolor sit amet consectetur \n adipisicing elit. Harum doloribus ratione vel ipsam nemo praesentium tempora, laborum debitis. Beatae ad obcaecati \n\nharum quas pariatur natus assumenda laborum deleniti, itaque iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus necessitatibus doloribus, repudiandae culpa nesciunt alias. Deleniti autem cupiditate commodi, sit expedita impedit natus numquam harum excepturi. Eius, fugiat doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt error fugiat aperiam qui ullam? Eum, eius quidem at nobis inventore natus error quo, nam, ipsam ut veniam id explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quis commodi aperiam obcaecati, consequuntur consequatur mollitia neque libero eos nulla saepe vero debitis nemo itaque cum ex tempore a fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto sequi ducimus dignissimos optio accusamus animi laudantium, recusandae fugit, quo autem obcaecati est quia sed molestias sapiente reiciendis inventore culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cumque rem est pariatur nisi! Libero sint similique saepe in? Quisquam rem nesciunt suscipit ea provident debitis quis, libero nobis. Quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate dolorum sapiente ipsam, aut itaque? Magni aut, consequatur doloribus rerum placeat ipsum iure cum tempore eius libero cumque quis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur quos! Dolorum dignissimos ipsa corrupti omnis? Asperiores, quam error corporis nulla ad est doloremque hic sapiente beatae assumenda culpa delectus!"
        },
        {
            Title: "Obras Civiles",
            img:"https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            Date: "14 de febrero del 2022",
            State:"",
            Description: "Lorem ipsum dolor sit amet consectetur  \n \n  adipisicing elit. Harum doloribus ratione vel ipsam nemo praesentium tempora, laborum debitis. Beatae ad obcaecati harum quas pariatur natus assumenda laborum deleniti, itaque iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus necessitatibus doloribus, repudiandae culpa nesciunt alias. Deleniti autem cupiditate commodi, sit expedita impedit natus numquam harum excepturi. Eius, fugiat doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,\n \n sunt error fugiat aperiam qui ullam? Eum, eius quidem at nobis inventore natus error quo, nam, ipsam ut veniam id explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quis commodi aperiam obcaecati, consequuntur consequatur mollitia neque libero eos nulla saepe vero debitis nemo itaque cum ex tempore a fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto sequi ducimus dignissimos optio accusamus animi laudantium, recusandae fugit, quo autem obcaecati est quia sed molestias sapiente reiciendis inventore culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cumque rem est pariatur nisi! Libero sint similique saepe in? Quisquam rem nesciunt suscipit ea provident debitis quis, libero nobis. Quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate dolorum sapiente ipsam, aut itaque? Magni aut, consequatur doloribus rerum placeat ipsum iure cum tempore eius libero cumque quis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur quos! Dolorum dignissimos ipsa corrupti omnis? Asperiores, quam error corporis nulla ad est doloremque hic sapiente beatae assumenda culpa delectus!"

        },
        {
            Title: "Instalación de Equipo Industrial",
            img:"https://repinel.com.mx/wp-content/uploads/bb-plugin/cache/instalaciones-electricas-industriales-scaled-landscape.jpg",
            Date: "14 de febrero del 2022",
            State:"",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ratione vel ipsam nemo praesentium tempora, laborum debitis. Beatae ad obcaecati harum quas pariatur natus assumenda laborum deleniti, itaque iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus necessitatibus doloribus, repudiandae culpa nesciunt alias. Deleniti autem cupiditate commodi, sit expedita impedit natus numquam harum excepturi. Eius, fugiat doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt error fugiat aperiam qui ullam? Eum, eius quidem at nobis inventore natus error quo, nam, ipsam ut veniam id explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quis commodi aperiam obcaecati, consequuntur consequatur mollitia neque libero eos nulla saepe vero debitis nemo itaque cum ex tempore a fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto sequi ducimus dignissimos optio accusamus animi laudantium, recusandae fugit, quo autem obcaecati est quia sed molestias sapiente reiciendis inventore culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cumque rem est pariatur nisi! Libero sint similique saepe in? Quisquam rem nesciunt suscipit ea provident debitis quis, libero nobis. Quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate dolorum sapiente ipsam, aut itaque? Magni aut, consequatur doloribus rerum placeat ipsum iure cum tempore eius libero cumque quis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur quos! Dolorum dignissimos ipsa corrupti omnis? Asperiores, quam error corporis nulla ad est doloremque hic sapiente beatae assumenda culpa delectus!"

        },
        {
            Title: "Reciclado de Embalaje, Barriles , IBC",
            img:"https://static.wixstatic.com/media/d1c95d_eb249e92ef7b4845b9592a60b63882cc~mv2.png/v1/fill/w_980,h_402,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/d1c95d_eb249e92ef7b4845b9592a60b63882cc~mv2.png",
            Date: "14 de febrero del 2022",
            State:"",
            Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloribus ratione vel ipsam nemo praesentium tempora, laborum debitis. Beatae ad obcaecati harum quas pariatur natus assumenda laborum deleniti, itaque iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus necessitatibus doloribus, repudiandae culpa nesciunt alias. Deleniti autem cupiditate commodi, sit expedita impedit natus numquam harum excepturi. Eius, fugiat doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, sunt error fugiat aperiam qui ullam? Eum, eius quidem at nobis inventore natus error quo, nam, ipsam ut veniam id explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam quis commodi aperiam obcaecati, consequuntur consequatur mollitia neque libero eos nulla saepe vero debitis nemo itaque cum ex tempore a fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iusto sequi ducimus dignissimos optio accusamus animi laudantium, recusandae fugit, quo autem obcaecati est quia sed molestias sapiente reiciendis inventore culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia cumque rem est pariatur nisi! Libero sint similique saepe in? Quisquam rem nesciunt suscipit ea provident debitis quis, libero nobis. Quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis cupiditate dolorum sapiente ipsam, aut itaque? Magni aut, consequatur doloribus rerum placeat ipsum iure cum tempore eius libero cumque quis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, consequatur quos! Dolorum dignissimos ipsa corrupti omnis? Asperiores, quam error corporis nulla ad est doloremque hic sapiente beatae assumenda culpa delectus!"

        }
    ]

    const realInfo = serviceInfo.filter((service)=>(service.Title.replace(/\s/gi,"_") == id))[0];




    return ( 
        <div className="service-info_container">
            <Navbar2/>

            <img src={realInfo.img} alt="" className="service-info__img" />
            <div className="service-info__subcontainer d-flex flex-column">
                <h2 className="service-info__title fw-bold h1 text-primary">{realInfo.Title}</h2>
                <hr className="service-info__divisor border-primary" />
                <p className="service-info__update-date text-info align-self-end fw-bold opacity-50">Ultima vez actualizado: {realInfo.Date}</p>
                <p className="service-info__content">{realInfo.Description}</p>
                <a href="/Servicios">
                    <button className="btn btn-outline-primary btn-large mx-auto d-block rounded-pill">Regresar a Servicios</button>
                </a>
            </div>

            <Footer/>
        </div>
     );
}
 
export default ServiceInfo;