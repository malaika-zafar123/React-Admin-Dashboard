import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address1: "",
    address2: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      address1: "",
      address2: "",
      message: "",
    });
  };

  return (
    <div className=" mx-auto bg-white dark:bg-gray-900 p-8 ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>
      <p className="text-xl text-[#359078] mb-6">We'd love to hear from you!</p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        {/* Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            placeholder="Your contact number"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Address 1 */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Address 1</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            required
            placeholder="Street, Building, etc."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Address 2 */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="City, State, ZIP"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your message or inquiry"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
            rows="5"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#359078] hover:bg-[#2a705d] dark:bg-[#359078] dark:hover:bg-[#2a705d] text-white font-bold py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;