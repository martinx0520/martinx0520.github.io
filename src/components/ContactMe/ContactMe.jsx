import "./ContactMe.css";

import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import React from "react";

const ContactMe = () => {
  return (
    <section className="contact-container" id="ContactMe">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="/assets/email.png"
            text="martinx0520@gmail.com"
          />
          <ContactInfoCard
            iconUrl="/assets/github.png"
            text="https://github.com/martinx0520"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
