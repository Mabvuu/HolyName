import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg mb-2 font-semibold sm:text-base">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 border rounded-lg border-gray-300 text-lg focus:ring-2 focus:ring-blue-500 sm:p-3 sm:text-base"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg mb-2 font-semibold sm:text-base">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 border rounded-lg border-gray-300 text-lg focus:ring-2 focus:ring-blue-500 sm:p-3 sm:text-base"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-lg mb-2 font-semibold sm:text-base">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-4 border rounded-lg border-gray-300 text-lg focus:ring-2 focus:ring-blue-500 sm:p-3 sm:text-base"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-[#005A9C] text-white text-lg rounded-lg hover:bg-blue-700 transition duration-300 sm:p-3 sm:text-base"
      >
        Send Message
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
};

export default Form;
