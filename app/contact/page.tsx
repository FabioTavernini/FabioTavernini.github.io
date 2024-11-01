"use client";

import React from "react";

const FeedbackForm = () => {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // Use event.currentTarget to get the form
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(), // Use 'as any' if TypeScript complains
    });
    // Success and error handling ...
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
