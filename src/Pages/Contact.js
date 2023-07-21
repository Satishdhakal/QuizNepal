import {React, useState} from "react"
import "./Contact.css"



export default function Contact(){
   





  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform form submission logic here
  };

  return (
<main>
<div className="title">Contact us</div>
<div className="title-info">We'll get back to you soon!</div>

<form action="" method="" class="form">
    <div className="input-group">
        <input type="text" name="first_name" id="first-name" placeholder="First name"></input>
        <label for="first-name">First name</label>
    </div>
    
    <div className="input-group">
        <input type="text" name="last_name" id="last-name" placeholder="Last Name"></input>
        <label for="last-name">Last name</label>
    </div>

    <div class="input-group">
        <input type="email" name="e-mail" id="e-mail" placeholder="e-mail"></input>
        <label for="e-mail">e-mail</label>
    </div>

    <div className="textarea-group">
        <textarea name="message" id="message" rows="5" placeholder="Message"></textarea>
        <label for="message">Message</label>
    </div>

    <div className="button-div">
        <button type="submit">Send</button>
    </div>
</form>
</main>
  );


}