import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contat Page</h1>
      <form action="">
        <input type="text" placeholder="your name" />
        <br />
        <input type="email" placeholder="email address" />
        <br />
        <input type="tel" placeholder="Phone Number" />
        <br />
        <input type="text" placeholder="subject" />
        <br />
        <textarea name="message" id="message" placeholder="Message"></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;
