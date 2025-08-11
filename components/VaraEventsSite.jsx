// components/VaraEventsSite.jsx
import React from "react";

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-20">
    <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">{title}</h2>
    <div className="text-lg leading-relaxed text-gray-700">{children}</div>
  </section>
);

export default function VaraEventsSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-serif text-xl">Vara <span className="font-sans">Events</span></a>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#services" className="hover:text-gray-600">Services</a>
            <a href="#process" className="hover:text-gray-600">Process</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center border px-3 py-2 rounded hover:bg-gray-900 hover:text-white transition text-sm">
            Book a consult
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-28 md:py-40">
        <h1 className="text-4xl md:text-6xl font-serif tracking-tight">
          Luxury experiences, authentically delivered.
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          Holistic planning, organic aesthetics, white-glove execution—for brands and private affairs.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#contact" className="inline-flex items-center border px-5 py-3 rounded-md hover:bg-gray-900 hover:text-white transition">
            Start a project
          </a>
          <a href="#services" className="inline-flex items-center px-5 py-3 rounded-md hover:underline">
            Explore services
          </a>
        </div>
      </section>

      {/* BADGE BAR */}
      <div className="border-y bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>Zero-waste options</div>
          <div>Experiential PR</div>
          <div>Global vendor network</div>
          <div>White-glove service</div>
        </div>
      </div>

      {/* ABOUT */}
      <Section id="about" title="Care as a promise. Design as a practice.">
        <p>
          We build events that feel human—grounded in story, elevated in execution. From brand activations
          to intimate milestones, our process blends strategy, aesthetics, and sustainability.
        </p>
      </Section>

      {/* SERVICES */}
      <Section id="services" title="Services">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Brand Activations", d: "Launches, pop-ups, influencer & press nights." },
            { t: "Corporate & Retreats", d: "Offsites, summits, wellness-forward retreats." },
            { t: "Private Affairs", d: "Milestones, micro-weddings, culturally-rooted ceremonies." },
          ].map((s, i) => (
            <div key={i} className="bg-white border rounded-lg p-6">
              <h3 className="font-serif text-xl mb-2">{s.t}</h3>
              <p className="text-gray-700">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section id="process" title="How we work">
        <ol className="grid md:grid-cols-4 gap-6 text-gray-800">
          <li className="bg-white border rounded-lg p-6"><b>1 / Discover</b><br/> Objectives, audience, budget.</li>
          <li className="bg-white border rounded-lg p-6"><b>2 / Design</b><br/> Concept boards, venues, materials.</li>
          <li className="bg-white border rounded-lg p-6"><b>3 / Build</b><br/> Vendors, run-of-show, PR outreach.</li>
          <li className="bg-white border rounded-lg p-6"><b>4 / Deliver</b><br/> On-site leadership & post-event wrap.</li>
        </ol>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let’s design your event">
        <div className="bg-white border rounded-lg p-6">
          <form className="grid md:grid-cols-2 gap-4">
            <input className="border rounded px-3 py-2" placeholder="Your name" />
            <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
            <input className="md:col-span-2 border rounded px-3 py-2" placeholder="Company / Event" />
            <textarea className="md:col-span-2 border rounded px-3 py-2" rows={5} placeholder="Date(s), location, guest count, goals, vibe" />
            <button type="button" className="inline-flex items-center border px-5 py-3 rounded-md hover:bg-gray-900 hover:text-white transition">
              Send inquiry
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Prefer email? <a className="underline" href="mailto:hello@varaevents.com">hello@varaevents.com</a>
          </p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Vara Events</div>
          <div>Holistic brand experiences & organic events.</div>
        </div>
      </footer>
    </div>
  );
}

