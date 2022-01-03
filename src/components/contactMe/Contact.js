import React, { useState, useEffect } from "react";

import "./Contact.css";
//icons
import { MdOutlineLocationOn } from "react-icons/md";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsDoorOpen } from "react-icons/bs";

//animations
import "aos/dist/aos.css";
import Aos from "aos";

//emailjs
import emailjs, { send } from "emailjs-com";
import { init } from "emailjs-com";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  //api key
  init("user_cgUng5FnI0XTUIevtSHq4");


  const sendEmail = (e) => {
    e.preventDefault();

    let tempParamm = {
      sender_name: document.getElementById("senderName").value,
      sender_email: document.getElementById("senderEmail").value,
      sender_text: document.getElementById("senderText").value,
    };

    emailjs
      .send("service_vhdxy23", "template_w98iu7a", tempParamm)
      .then(function (res) {
        console.log("succses", res.status);
        setMsg("");
        setMsg2("");
        setMsg3("");
      });
  };
  

  const validate = () => {
      let sender_name = document.getElementById("senderName").value;
      let sender_email = document.getElementById("senderEmail").value;
      let sender_text = document.getElementById("senderText").value;
      let errorMsg = document.getElementById('errMsg');

      errorMsg.style.padding = "10px";

      let text;

      if(sender_name.length < 0){
        text = 'Please enter a valid name !';
        errorMsg.innerHTML = text;
        return
      }
      if(sender_email.indexOf('@') == -1 || sender_email.length < 6){
        text = 'Please enter a valid email !'
        errorMsg.innerHTML = text;
        return
      } 
      if(sender_text.length <= 10){
        text = 'Please enter a message with more than 10 characters';
        errorMsg.innerHTML = text;
        return
      }
      alert("Form Submitted Successfully!");
      return true;

  }



  return (
    <div>
      <div className="contact__flexbox">
        {/* box-1 */}
        <div className="contact__box-1" data-aos="fade-up">
          <h1 className="contact__h1">Let's Chat</h1>
          <p className="contact__p">
            Whether you have a question, want to start <br></br>a project or
            simply want to connect.<br></br>
            Feel free to send me a message in.
          </p>

          <div className="a1">
            <MdOutlineLocationOn
              className="contact__icon"
              style={{ fontSize: "25px" }}
            />
            <p>Eastfield Town 15th</p>
          </div>
          <div className="a2">
            <AiOutlinePhone
              className="contact__icon"
              style={{ fontSize: "25px" }}
            />
            <p>+359 889 923 1236</p>
          </div>
          <div className="a3">
            <AiOutlineMail
              className="contact__icon"
              style={{ fontSize: "25px" }}
            />
            <p>wassup@gmail.com</p>
          </div>
          <div className="a4">
            <BsDoorOpen
              className="contact__icon"
              style={{ fontSize: "25px" }}
            />
            <p>8am - 18pm</p>
          </div>

          <div className="social_media">
            <AiOutlineInstagram className="social__icon" />{" "}
            <AiOutlineFacebook className="social__ico" />{" "}
            <AiFillGithub className="social__ic" />{" "}
            <AiOutlineLinkedin className="social__i" />
          </div>
        </div>
        {/* box-2 */}
        <div className="contact__box-2" data-aos="fade-up">
          <h1 className="contact__box2__h2">Connect with us</h1>
          <p className="contact__box2__p">Be in touch</p>

          {/* form */}
          <form className="input__top" onSubmit={() => {return validate()}}>
            <div className="group">
              <input
                type="text"
                required
                value={msg}
                name="sender_name"
                id="senderName"
                onChange={(e) => setMsg(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="contact__label">Name</label>
            </div>
            <div className="group">
              <input
                type="text"
                required
                value={msg2}
                name="sender_emai"
                id="senderEmail"
                onChange={(e) => setMsg2(e.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label className="contact__label">email</label>
            </div>
            <div className="group">
              <textarea
                value={msg3}
                onChange={(e) => setMsg3(e.target.value)}
                name="sender_message"
                id="senderText"
                type="text"
                required
                placeholder="Enter your message"
                className="contact__textarea"
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            </div>{ validate ? (
           
            <button
              className="contact__btn"
              onClick={sendEmail}
            >
                Send email
              </button>
            ) : (
              <input
              type="submit"
             value="Send"
             className="contact__btn"
             onClick={sendEmail}
            />
            )
                
            }
          </form>
          {/* form */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
