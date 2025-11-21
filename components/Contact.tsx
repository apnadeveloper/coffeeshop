import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    const recipient = 'info@apnadeveloper.com';
    const mailtoSubject = subject ? encodeURIComponent(subject) : encodeURIComponent('Contact Form Submission from Velvet Bean Website');
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoBody = encodeURIComponent(body);

    window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <span className="text-coffee-500 uppercase tracking-[0.2em] text-sm font-bold">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-2">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-coffee-500 mt-1" />
                <div>
                  <h4 className="text-white font-serif text-lg">Address</h4>
                  <p className="text-gray-400 text-sm">123 Espresso Lane,<br/>Coffee City, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-coffee-500 mt-1" />
                <div>
                  <h4 className="text-white font-serif text-lg">Phone</h4>
                  <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-coffee-500 mt-1" />
                <div>
                  <h4 className="text-white font-serif text-lg">Email</h4>
                  <p className="text-gray-400 text-sm">hello@velvetbean.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-coffee-500 mt-1" />
                <div>
                  <h4 className="text-white font-serif text-lg">Hours</h4>
                  <p className="text-gray-400 text-sm">Mon-Fri: 7am - 8pm<br/>Sat-Sun: 8am - 9pm</p>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-coffee-500 transition-colors"
                />
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-coffee-500 transition-colors"
                />
              </div>
              <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-coffee-500 transition-colors"
                />
              <textarea 
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-coffee-500 transition-colors"
              ></textarea>
              <button type="submit" className="w-full bg-coffee-500 text-white py-3 rounded-lg font-bold tracking-wide hover:bg-coffee-400 transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative group"
          >
            {/* Using an iframe for a generic location map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937596!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647558345272!5m2!1sen!2sus"
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-4 border-white/5 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;