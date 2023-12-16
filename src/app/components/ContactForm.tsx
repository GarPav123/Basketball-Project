// components/ContactForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response); // Log the response to check for errors

      const data = await response.json();

      if (data.success) {
        console.log("Email sent successfully");
        // Optionally, you can reset the form fields after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error sending email:", data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl h-[100%] w-full mx-[2%] my-[-1.8%] p-10 bg-gray-100 rounded-md shadow-md "
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name" // Make sure this matches formData.name
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-md py-2 px-3"
          rows={4}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md flex justify-center ml-[35%]"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
