import React, { useState } from "react";
import { Mail, Linkedin, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { SERAPH_DATA } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "partnership",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SERAPH_DATA.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      // Fallback
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple robust validation
    if (!formData.name.trim()) {
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg("Please write your message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate standard full-stack API transaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form variables
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "partnership",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-[#020617] overflow-hidden">
      {/* Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-blue-650/15 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Editorial context, email copies (5 Columns) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] tracking-widest uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                SECURE ENGAGEMENT HUB
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {SERAPH_DATA.contact.title}
              </h2>
            </div>

            <p className="font-sans text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              {SERAPH_DATA.contact.content}
            </p>

            {/* Accessible Contact buttons/channels */}
            <div className="space-y-4 pt-4">
              
              {/* Copied Email Button */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-500">Official Communication Vector</span>
                <div className="flex items-center gap-2 p-1.5 bg-slate-950/60 border border-white/10 rounded-xl relative group">
                  <a href={`mailto:${SERAPH_DATA.contact.email}`} className="flex items-center gap-3 px-3 py-1.5 min-w-0 flex-1 hover:opacity-80 transition-opacity">
                    <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-sans text-sm sm:text-base text-slate-100 font-semibold truncate">{SERAPH_DATA.contact.email}</span>
                  </a>

                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="ml-auto flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400 hover:text-white hover:border-blue-450 transition-all duration-200 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4.5 h-4.5 text-emerald-400" /> : <Copy className="w-4.5 h-4.5" />}
                  </button>

                  {/* Tooltip */}
                  {copiedEmail && (
                    <span className="absolute -top-10 right-4 px-2.5 py-1 text-[11px] font-semibold bg-emerald-500 text-slate-950 font-mono rounded-md shadow-md animate-bounce">
                      Copied!
                    </span>
                  )}
                </div>
              </div>

              {/* LinkedIn Connect Button */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-slate-500">Institutional Registry</span>
                <a
                  id="contact-linkedin-btn"
                  href="https://www.linkedin.com/company/seraphguard-labs/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3.5 p-4 bg-slate-950/60 border border-white/10 rounded-xl text-slate-350 hover:text-white hover:border-blue-500 hover:bg-white/5 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 shrink-0 fill-current" />
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-semibold">{SERAPH_DATA.contact.linkedin}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5 leading-none">Connect with us on LinkedIn</span>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* Right Side: Stateful Form and Success Display (7 Columns) */}
          <div className="lg:col-span-12 xl:col-span-7 w-full">
            <div className="p-6 sm:p-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/80 relative">
              
              {isSuccess ? (
                /* Success Message Section */
                <div id="contact-success-frame" className="py-12 px-2 text-center space-y-6 animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.15)] animate-pulse">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white">Message Transmitted</h3>
                    <p className="font-sans text-sm sm:text-base text-slate-350 max-w-md mx-auto leading-relaxed font-light">
                      Thank you for reaching out to SeraphGuard Labs. Our research operations team will review your details and respond back to <span className="text-white hover:underline">{SERAPH_DATA.contact.email}</span> shortly.
                    </p>
                  </div>

                  <button
                    id="btn-return-form"
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all font-mono cursor-pointer"
                  >
                    TRANSMIT NEW INQUIRY
                  </button>
                </div>
              ) : (
                /* Interactive Form Section */
                <form id="contact-inquiry-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-white/10 pb-3.5 mb-2 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#94a3b8] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                      Digital Ingress Point
                    </span>
                    <span className="font-mono text-[8px] text-slate-500 uppercase">SYS SECURED</span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                        Your Name *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nevin Robert"
                        className="w-full bg-[#091024]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                        Your Email *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="operator@company.com"
                        className="w-full bg-[#091024]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Organization input */}
                    <div className="space-y-2">
                      <label htmlFor="form-organization" className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                        Organization
                      </label>
                      <input
                        id="form-organization"
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Research Institute / Lab"
                        className="w-full bg-[#091024]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all"
                      />
                    </div>

                    {/* Subject selection */}
                    <div className="space-y-2">
                      <label htmlFor="form-subject" className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                        Topic of Engagement
                      </label>
                      <div className="relative">
                        <select
                          id="form-subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#091024]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-150 focus:outline-none focus:border-blue-500 hover:border-white/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="partnership" className="bg-[#040815] text-white">Research Partnership</option>
                          <option value="collaboration" className="bg-[#040815] text-white">Child Safety Collaboration</option>
                          <option value="ethics" className="bg-[#040815] text-white">Ethical AI Frameworks</option>
                          <option value="general" className="bg-[#040815] text-white">General Inquiries</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="form-message" className="font-mono text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      Communication Message payload *
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify details, partnership ideas, or research areas..."
                      className="w-full bg-[#091024]/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none hover:border-white/20 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="btn-form-transmit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/10 transition-all duration-200 disabled:opacity-50 hover:scale-[1.01] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white/35 border-t-white rounded-full mr-1.5" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        TRANSMIT PAYLOAD
                        <Send className="w-4 h-4 text-blue-100" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
