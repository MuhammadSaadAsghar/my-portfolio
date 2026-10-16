
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Iconsocial from "../Components/Iconsocial";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_al55pfg",
        "template_wo2ev7f",
        formRef.current,
        {
          publicKey: "W7NEpu3l10uwzofi5",
        }
      );

      setSuccess(true);
      setStatus("Message sent successfully! I will contact you soon.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setSuccess(false);
      setStatus("Message send nahi hua. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black/95 text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Get In <span className="text-[#F59E0B]">Touch</span>
        </h2>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1F2937] rounded-xl p-6 text-center hover:bg-blue-500/20 transition">
            <h3 className="text-xl mb-2">📧 Email</h3>
            <p className="text-gray-300 break-all">
              muhammadsaadasghar408@gmail.com
            </p>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 text-center hover:bg-blue-500/20 transition">
            <h3 className="text-xl mb-2">📱 Phone</h3>
            <p className="text-gray-300">
              +92 345 9451270
            </p>
          </div>

          <div className="bg-[#1F2937] rounded-xl p-6 text-center hover:bg-blue-500/20 transition">
            <h3 className="text-xl mb-2">📍 Location</h3>
            <p className="text-gray-300">
              Lahore, Punjab, Pakistan
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left */}
          <div className="lg:w-1/3 space-y-6">
            <h3 className="text-3xl font-bold text-[#F59E0B]">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-7">
              Have a project in mind or want to work together?
              Feel free to contact me through the form or my
              social media profiles.
            </p>

            <Iconsocial />
          </div>

          {/* Right */}
          <div className="lg:w-2/3 bg-[#1F2937]/95 rounded-2xl p-8">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                autoComplete="name"
                maxLength={100}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-[#F59E0B]"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                autoComplete="email"
                maxLength={254}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-[#F59E0B]"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                maxLength={150}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 text-white outline-none focus:border-[#F59E0B]"
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message..."
                maxLength={4000}
                required
                className="w-full p-4 rounded-lg bg-black border border-gray-700 text-white outline-none resize-none focus:border-[#F59E0B]"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-[#F59E0B] hover:bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    success ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
