import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Loader = () => {
  return (
    <div
      className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-white border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="absolute! -m-px! h-px! w-px! overflow-hidden! whitespace-nowrap! border-0! p-0! [clip:rect(0,0,0,0)]!">
        Loading...
      </span>
    </div>
  );
};
function Contact({ styles }) {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please Enter Your Name");
      setError("Please Enter Your Name");

      return;
    }
    if (!email.trim()) {
      alert("Please Enter Your Email");
      setError("Please Enter Your Email");

      return;
    }
    if (!message.trim()) {
      alert("Please Enter Message");
      setError("Please Enter Message");

      return;
    }
    setLoading(true);

    const mailObj = {
      name: name,
      time: new Date().toLocaleDateString(),
      from_name: name,
      from_email: email,
      message: message,
      to_email: "dishengajera@gmail.com",
      to_name: "Dishen Gajera",
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        mailObj,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setLoading(false);
          alert(
            "Email send successfully i will get back to you as soon as possible."
          );
          setError(
            "Email send successfully i will get back to you as soon as possible."
          );
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          alert("Something went wrong" + error.text);
          setError("Something went wrong" + error.text);
        }
      );
  };
  return (
    <section
      className={`w-full py-20 bg-black border-t border-gray-900 relative overflow-hidde ${styles}`}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-900/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
              Me
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* --- 1. LEFT SIDE (Contact Info) --- */}
          {/* On Mobile: This appears FIRST */}
          <div className="flex flex-col gap-8">
            {/* Phone Card */}
            <ContactCard
              icon="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
              title="Phone"
              value="+91 8849792324"
              link="tel:+918849792324"
              color="blue"
            />

            {/* Email Card */}
            <ContactCard
              icon="https://img.icons8.com/ios-filled/50/ffffff/mail.png"
              title="Email"
              value="dishengajera@gmail.com"
              link="https://mail.google.com/mail/?view=cm&fs=1&to=dishengajera@gmail.com"
              color="pink"
            />

            {/* DESKTOP ONLY: Social Links (Hidden on Mobile) */}
            <div className="hidden md:block mt-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect with me
              </h3>
              <SocialLinksArea />
            </div>
          </div>

          {/* --- 2. RIGHT SIDE (Form) --- */}
          {/* On Mobile: This appears SECOND (After Info, Before Links) */}
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 shadow-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form className="flex flex-col gap-4" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                name="to_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                name="to_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>

              <button
                className="mt-2 w-full py-3 rounded-lg font-bold text-white bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] cursor-pointer"
                disabled={loading}
              >
                {loading ? <Loader /> : "Send Message"}
              </button>
              {error && (
                <span className="bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center font-semibold text-2xl mt-2 animate-bounce">
                  {error}
                </span>
              )}
            </form>
          </div>

          {/* --- 3. MOBILE ONLY: Social Links --- */}
          {/* On Mobile: This appears THIRD (At the bottom) */}
          {/* On Desktop: This is hidden */}
          <div className="md:hidden flex flex-col items-center gap-4 mt-4">
            <h3 className="text-xl font-bold text-white">Connect with me</h3>
            <SocialLinksArea />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

// 1. Social Links Area (Reusable)
function SocialLinksArea() {
  return (
    <div className="flex gap-4 flex-wrap justify-center md:justify-start">
      <SocialBtn
        name="LinkedIn"
        link="https://www.linkedin.com/in/dishen-gajera/"
        icon="https://img.icons8.com/color/48/linkedin.png"
      />

      <SocialBtn
        name="GitHub"
        link="https://github.com/Dishen-Gajera"
        icon="https://img.icons8.com/ios-glyphs/48/ffffff/github.png"
      />

      {/* LeetCode Icon: Added 'invert' class so it shows white on black */}
      <SocialBtn
        name="LeetCode"
        link="https://leetcode.com/u/si2oIf1yHf/"
        icon="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
        className="invert"
      />

      {/* GFG Icon: Updated to reliable Wikimedia link */}
      <SocialBtn
        name="GeeksforGeeks"
        link="https://www.geeksforgeeks.org/profile/dishenmoxhg"
        icon="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
        className="bg-white rounded-full p-1" // Added white background for better visibility
      />
    </div>
  );
}

// 2. Contact Card
function ContactCard({ icon, title, value, link, color }) {
  const borderColors = {
    blue: "group-hover:border-blue-500",
    pink: "group-hover:border-pink-500",
  };

  return (
    <a
      href={link}
      className={`group flex items-center gap-4 p-5 rounded-xl bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:-translate-y-1 ${borderColors[color]}`}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-gray-400 text-sm font-medium">{title}</h4>
        <p className="text-white font-bold text-lg">{value}</p>
      </div>
    </a>
  );
}

// 3. Social Button
function SocialBtn({ link, icon, name, className = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 flex items-center justify-center bg-gray-900 border border-gray-800 rounded-full transition-all duration-300 hover:bg-gray-800 hover:scale-110 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
      title={name}
    >
      <img
        src={icon}
        alt={name}
        className={`w-8 h-8 object-contain ${className}`}
      />
    </a>
  );
}

export default Contact;
