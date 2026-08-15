"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import ScaleLetterText from "../ui/scale-letter-text";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | ""; text: string }>({
    type: "",
    text: "",
  });

  const email = "anisshaikh2131@gmail.com";
  const phone = "+918766430424";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `Portfolio Inquiry from ${formData.name}`, // Satisfies required {{title}}
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setStatusMessage({
        type: "success",
        text: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Full Error:", error);
      setStatusMessage({
        type: "error",
        text: `Failed to send message: ${error?.text || "Please check your network and try again."}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mt-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2
          id="contact-heading"
          className="text-cyan-400 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          <ScaleLetterText text="Get In Touch" />
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

            <ul className="space-y-5 text-sm sm:text-base">
              <li className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-3 overflow-hidden">
                  <span className="text-cyan-400 text-lg"><FaEnvelope /></span>
                  <span className="text-slate-200 truncate">{email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1 text-xs font-medium"
                  title="Copy email"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                </button>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <span className="text-cyan-400 text-lg"><FaPhoneAlt /></span>
                <span className="text-slate-200">{phone}</span>
              </li>

              <li className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
                <span className="text-cyan-400 text-lg"><FaMapMarkerAlt /></span>
                <span className="text-slate-200">India (IST) · Open to Remote</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-4">
              Find me online
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/AnisJshK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all text-sm font-medium"
              >
                <FaGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all text-sm font-medium"
              >
                <FaLinkedin className="text-cyan-400 text-lg" /> LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's build something amazing together..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                ></textarea>
              </div>

              {statusMessage.text && (
                <div
                  className={`p-3 rounded-xl text-xs font-medium ${
                    statusMessage.type === "success"
                      ? "bg-emerald-950/60 border border-emerald-500/30 text-emerald-300"
                      : "bg-red-950/60 border border-red-500/30 text-red-300"
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-4 py-3 px-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20 text-center flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;