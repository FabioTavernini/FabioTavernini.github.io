"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";

export default function ContactForm() {
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

      if (!response.ok) throw new Error("Network response was not ok");

      alert("Thank you for the submission :)");
      event.currentTarget.reset();
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <form className="pr-5" name="contact" onSubmit={handleFormSubmit}>
      <Input name="form-name" type="hidden" value="contact" />

      <Input className="m-4" label="Your name" name="name" placeholder="Foo Bar" type="text" />
      <Input required className="m-4" label="Email" name="email" placeholder="Where I can contact you" type="email" />
      <Input className="m-4" label="Subject" name="subject" placeholder="What's this about?" type="text" />
      <Textarea required className="m-4" label="Your message" minRows={15} name="message" />
      <Button className="m-4" color="primary" size="md" type="submit">
        Submit
      </Button>
    </form>
  );
}
