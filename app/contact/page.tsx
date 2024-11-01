"use client";

import React from "react";

const FeedbackForm = () => {
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
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error); // Log any errors
    }
  };

  return (
    <form name="feedback" onSubmit={handleFormSubmit}>
      <input type="hidden" name="form-name" value="feedback" />
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="text" placeholder="Email (optional)" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;