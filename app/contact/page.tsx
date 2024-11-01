"use client"

import { Button } from "@nextui-org/button";

export default function ContactForm() {
  return (
    
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />

      <p>
        <label htmlFor="name">Your Name:</label>
        <input type="text" name="name" id="name" required />
      </p>

      <p>
        <label htmlFor="email">Your Email:</label>
        <input type="email" name="email" id="email" required />
      </p>

      <p>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required></textarea>
      </p>

      <p>
        <Button type="submit" className="submit-button">Send</Button>
      </p>
    </form>
  );
}
