"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

const ContactForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      alert("Thank you for the submission :)");

    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (


  

    <form name="contact" onSubmit={handleFormSubmit} className="pr-5">
      
      <Input type="hidden" name="form-name" value="contact" />

      <Input name="name" type="text" label="Your name" placeholder="Foo Bar" className="m-4" />
      <Input name="email" type="email" label="Email" placeholder="Where i can contact you" className="m-4" required/>
      <Input name="subject" type="text" label="Subject" placeholder="whats this about?" className="m-4" />
      <Textarea name="message" label="Your message for me" minRows={15} className="m-4" required/>     
      <Button size="md" color="primary" type="submit" className="m-4">Submit</Button>

    </form>

  );
};

export default ContactForm;
