import { useState } from "react";
import "./Contact.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-grid">
        {/* Left */}
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Feel free to reach out for collaboration, opportunities or just
            friendly chat. I'm always open to discussing new projects and ideas.
            I look forward to connect with you.
          </p>
          <div className="email-card">
            <div className="icon">
              <EmailOutlinedIcon />
            </div>

            <div className="text">
              <p>Email</p>
              <p>ojojoel04@gmail.com</p>
            </div>
          </div>
          <div className="email-card">
            <div className="icon">
              <LocationOnOutlinedIcon />
            </div>

            <div className="text">
              <p>Address</p>
              <p>Lagos,Nigeria</p>
            </div>
          </div>
          <div className="email-card">
            <div className="icon">
              <PhoneOutlinedIcon />
            </div>

            <div className="text">
              <p>Phone Number</p>
              <p>+2348026923477</p>
            </div>
          </div>

          <p className="follow">Follow me on</p>
          <div className="socials">
            <span>🐙</span>
            <span>in</span>
            <span>𝕏</span>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form">
          <label>Name</label>
          <input name="name" placeholder="Your Name" required />
          <label>Email</label>
          <input name="email" placeholder="your@email.com" required />

          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
          />

          <button>✈ Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
