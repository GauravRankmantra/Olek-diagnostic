import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const isDisabled = !formData.name || !formData.phone;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send("service_lbk2rb1", "template_n7exmo1", formData, "K6x6qEqgzizR5OSXS")
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
          setSending(false);
        },
        (error) => {
          toast.error("Failed to send message.");
          console.error(error);
          setSending(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 cursor-pointer right-3 text-gray-500 hover:text-red-500 transition"
        >
          <IoMdClose size={24} />
        </button>

        <h2 className="text-3xl font-bold text-[#a01a5a] mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="block text-sm text-start font-semibold text-gray-600">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a01a5a]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-start  font-semibold text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a01a5a]"
            />
          </div>

          <div>
            <label className="block text-sm text-start  font-semibold text-gray-600">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a01a5a]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-start  font-semibold text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a01a5a]"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isDisabled || sending}
            className={`w-full py-3 font-semibold rounded-xl transition duration-300 ${
              isDisabled || sending
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#a01a5a] text-white hover:bg-[#007766]"
            }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
