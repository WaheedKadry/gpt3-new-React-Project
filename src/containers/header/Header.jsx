import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

function Header() {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <div className="gradient__text">
          <h1> Let’s Build Something amazing with GPT-3 OpenAI</h1>
        </div>
        <p className="header-content-description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-content-input">
          <input
            type="email"
            placeholder="Your E-mail Address"
            className="header-content-email"
          />
          <button type="button" className="header-content-btn">
            Get Started{" "}
          </button>
        </div>
        <div className="header-content-img">
          <img src={people} alt="people" />
          <p className="header-content-img-text">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
