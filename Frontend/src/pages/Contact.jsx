import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We'll get back to you soon.", {
      style: {
        background: '#2D4030',
        color: '#FDFBF7',
        borderRadius: '12px',
      },
    });
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600">
          Get in Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-800 tracking-tight">
          We'd Love to Hear From You
        </h1>
        <p className="text-sm text-forest-800/70 font-light leading-relaxed">
          Have a question about pot dimensions, custom glazing, bulk orders, or care advice? Send us a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT CONTACT CARDS */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-sand-100 border border-sand-300 rounded-3xl p-6 shadow-soft space-y-6">
            <h3 className="font-serif text-xl font-bold text-forest-800 border-b border-sand-200 pb-3">
              Contact Information
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 text-forest-800">
                <div className="w-8 h-8 rounded-full bg-sand-200 text-terracotta-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">Email Us</span>
                  <span className="text-forest-800/70">hello@bloomnest.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-forest-800">
                <div className="w-8 h-8 rounded-full bg-sand-200 text-terracotta-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">Call / WhatsApp</span>
                  <span className="text-forest-800/70">+1 (800) 555-BLOOM</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-forest-800">
                <div className="w-8 h-8 rounded-full bg-sand-200 text-terracotta-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">Pottery Studio</span>
                  <span className="text-forest-800/70">104 Artisan Lane, Clay District, CA 90210</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream border border-sand-300 rounded-3xl p-6 space-y-2">
            <h4 className="font-serif text-base font-bold text-forest-800">Studio Hours</h4>
            <p className="text-xs text-forest-800/70">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
            <p className="text-xs text-forest-800/70">Saturday: 10:00 AM - 4:00 PM EST</p>
            <p className="text-xs text-forest-800/70">Sunday: Closed for firing & kiln resting</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:col-span-7 bg-sand-100 border border-sand-300 rounded-3xl p-8 shadow-soft-hover">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-forest-800">
                Message Sent!
              </h3>
              <p className="text-sm text-forest-800/80 font-medium">
                Thank you! We'll get back to you soon.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
                className="px-6 py-2 bg-terracotta-500 text-cream text-xs font-bold rounded-full shadow-md hover:bg-terracotta-600 transition-colors uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-forest-800 mb-2">
                Send Us a Message
              </h3>

              <div>
                <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-forest-800 uppercase tracking-wider mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your plant pot requirements or questions..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-xs bg-cream border border-sand-300 rounded-xl text-forest-800 focus:outline-none focus:border-terracotta-500 font-medium"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-terracotta-500 hover:bg-terracotta-600 text-cream text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
};

export default Contact;
