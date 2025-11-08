import { useState } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-navy transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-mutedIndigo bg-clip-text text-transparent mb-6">
          Let’s Connect
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-accent to-mutedIndigo mx-auto mb-10"></div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <input type="text" placeholder="Your Name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-indigoCard text-gray-900 dark:text-light" />
          <input type="email" placeholder="Your Email" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-indigoCard text-gray-900 dark:text-light" />
          <textarea rows="5" placeholder="Your Message" value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-indigoCard text-gray-900 dark:text-light" />
          <button type="submit" className="px-6 py-3 bg-gradient-to-r from-accent to-mutedIndigo text-navy dark:text-light rounded-lg font-semibold hover:opacity-90 transition">
            {sent ? '✓ Sent!' : 'Send Message'}
          </button>
        </form>

        <div className="mt-10 flex justify-center gap-6 text-accent">
          {[FiMail, FiPhone, FiLinkedin, FiGithub].map((Icon, i) => (
            <Icon key={i} className="w-6 h-6 hover:scale-110 transition-transform" />
          ))}
        </div>
      </div>
    </section>
  );
}
