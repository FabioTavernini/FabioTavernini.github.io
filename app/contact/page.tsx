"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const ContactForm = () => {
  const router = useRouter(); // Initialize useRouter

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget); // Get form data

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Form submitted successfully!"); // Log success
      // Redirect to the success page
      router.push("/success"); // Adjust this path if necessary

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error); // Log any errors
    }
  };

  return (
    <form name="contact" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email (optional)" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
