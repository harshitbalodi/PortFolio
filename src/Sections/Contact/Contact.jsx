import { useState } from 'react';
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react';

// Web3Forms access key — free, no signup beyond a one-click email verification.
// 1) Go to https://web3forms.com, enter balodiharshit1907@gmail.com, copy the key.
// 2) Create a `.env` file at project root with:  VITE_WEB3FORMS_KEY=your-key-here
// Until then, the form falls back to opening the user's mail client.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const FALLBACK_EMAIL = 'balodiharshit1907@gmail.com';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: '', text: '' });

    // No key configured → graceful mailto fallback
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
      const body = encodeURIComponent(
        `${formData.message}\n\n— ${formData.name}\n${formData.email}`
      );
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
      setStatus({
        type: 'info',
        text: 'Opening your email client… (direct delivery not yet configured)',
      });
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({
          type: 'success',
          text: "Message sent! I'll get back to you within a day or two.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Send failed');
      }
    } catch (err) {
      setStatus({
        type: 'error',
        text: `Couldn't send — please email me directly at ${FALLBACK_EMAIL}.`,
      });
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus({ type: '', text: '' }), 7000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Let&apos;s Connect</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Open to conversations on AI/full-stack engineering, collaboration on intelligent
              systems, or new opportunities. Based in Delhi, India.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-slate-300 hover:text-violet-300 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Mail className="text-violet-300" size={24} />
                </div>
                <a href="mailto:balodiharshit1907@gmail.com" className="hover:text-violet-300 transition-colors">
                  balodiharshit1907@gmail.com
                </a>
              </div>
              <div className="flex items-center text-slate-300 hover:text-violet-300 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Github className="text-violet-300" size={24} />
                </div>
                <a
                  href="https://github.com/harshitbalodi"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-300 transition-colors"
                >
                  github.com/harshitbalodi
                </a>
              </div>
              <div className="flex items-center text-slate-300 hover:text-violet-300 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <Linkedin className="text-violet-300" size={24} />
                </div>
                <a
                  href="https://linkedin.com/in/harshit-balodi"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-violet-300 transition-colors"
                >
                  linkedin.com/in/harshit-balodi
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-violet-500/50 transition-all duration-300 shadow-lg"
          >
            {/* honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2 font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full bg-slate-700 text-white px-4 py-3 rounded-lg border border-slate-600 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-[1.02]"
              >
                {submitting && <Loader2 size={18} className="animate-spin" />}
                {submitting ? 'Sending…' : 'Send Message'}
              </button>
              {status.text && (
                <p
                  className={`text-center font-medium animate-fadeIn ${
                    status.type === 'success'
                      ? 'text-green-400'
                      : status.type === 'error'
                      ? 'text-red-400'
                      : 'text-amber-300'
                  }`}
                >
                  {status.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
