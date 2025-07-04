import React, { useState } from "react";


function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
