import { useState } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {

    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Subject,setSubject]  = useState("");
    const [Message,setMessage] = useState("");

    function handleEraseStates(){
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    function sendEmail(e){

        e.preventDefault();

    emailjs.sendForm('service_l4m6h8r', 'template_pqxbnzk', e.target, 'DL2k33rBuXfhGF-75')
      .then((result) => {
          console.log(result.text);
          handleEraseStates(); 
      }, (error) => {
          console.log(error.text);
      });
}

    return ( 
        <div className="contact-form__container">
            <img src="https://images.unsplash.com/photo-1599813391721-ed8c5fe98166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139&q=80" alt="" className="contact-form__background"/>
            <div className="contact-form__color bg-primary"></div>
            <div className="contact-form__content">
                <div className="title-container">
                    <div className="title-deco bg-secondary d-inline-block"></div>
                    <h3 className="home-news__title contact-form__title fw-bold text-center text-light opacity-100 d-inline-block">Envianos un Mensaje!</h3>
                    <div className="title-deco bg-secondary d-inline-block"></div>
                </div>
                <form action="" className="d-flex flex-column align-items-center" onSubmit={sendEmail}>
                    <label className="contact-form__input-group">
                        <h4 className="contact-form__input-title text-light h5">Nombre</h4>
                        <input type="text" className="contact-form__input" value={Name} name="Name" onChange = {(event)=>{setName(event.target.value)}}/>
                    </label>
                    <label className="contact-form__input-group">
                        <h4 className="contact-form__input-title text-light h5">Correo</h4>
                        <input type="email" className="contact-form__input" value={Email} name="Email" onChange = {(event)=>{setEmail(event.target.value)}}/>
                    </label>
                    <label className="contact-form__input-group">
                        <h4 className="contact-form__input-title text-light h5">Asunto</h4>
                        <input type="text" className="contact-form__input" value={Subject}  name="Subject" onChange = {(event)=>{setSubject(event.target.value)}}/>
                    </label>
                    <label className="contact-form__input-group">
                        <h4 className="contact-form__input-title text-light h5">Mensaje</h4>
                        <textarea cols="30" rows="10" className="contact-form__input" value={Message} name="Message" onChange = {(event)=>{setMessage(event.target.value)}}></textarea>
                    </label>
                    <button  className="contact-form__button btn btn-outline-light rounded-pill btn-lg">Enviar</button>
                </form>
            </div>
        </div>
     );
}
 
export default ContactForm;