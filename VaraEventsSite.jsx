import { motion } from "framer-motion";
import { Calendar, Sparkles, Users, ArrowRight, BadgeCheck } from "lucide-react";

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-6">{title}</h2>
      <div className="text-lg leading-relaxed">{children}</div>
    </section>
  );
}

export default function VaraEventsSite() {
  return (
    <div>
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[rgba(248,246,242,0.7)] border-b">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-serif text-xl">Vara<span className="text-ink/60"> Events</span></div>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#work" className="hover:opacity-70">Portfolio</a>
            <a href="#process" className="hover:opacity-70">Process</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
          <a href="#contact" className="btn">
            Book a consult <ArrowRight size={16}/>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-serif tracking-tight mb-6"
          >
            Luxury experiences, authentically delivered.
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Vara is the promise we make to our clients—care, precision, and events that feel as organic as they are unforgettable.
          </p>
          <div className="flex gap-3">
            <a href="#contact" className="btn">
              Start a project <ArrowRight size={18}/>
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-md hover:underline">
              See services
            </a>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-center gap-2"><BadgeCheck size={18}/> Sustainable-first</div>
          <div className="flex items-center gap-2"><Calendar size={18}/> Timeline obsessed</div>
          <div className="flex items-center gap-2"><Users size={18}/> Guest experience led</div>
          <div className="flex items-center gap-2"><Sparkles size={18}/> Aesthetic rigor</div>
        </div>
      </section>

      {/* About */}
      <Section id="about" title="About Vara">
        <p>
          In Old Norse, <em>vara</em> carries the sense of care and promise. That’s our ethos.
          From intimate brand dinners to large-scale product launches, we design experiences that feel
          organic, intentional, and beautifully on-brand.
        </p>
      </Section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Brand & Corporate</h3>
            <p>Product launches, summits, retreats, immersive activations, experiential PR.</p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Private & Social</h3>
            <p>Weddings, milestones, VIP dinners—designed with soul and precision.</p>
          </div>
          <div className="border rounded-lg p-6 bg-white">
            <h3 className="font-serif text-xl mb-2">Creative Studio</h3>
            <p>Concept development, styling, vendor curation, sustainability strategy.</p>
          </div>
        </div>
      </Section>

      {/* Portfolio */}
      <Section id="work" title="Selected Work">
        <div className="grid md:grid-cols-3 gap-6">
          {["Coastal Brand Launch", "Garden Wedding", "Founder’s Retreat"].map((label, i) => (
            <div key={i} className="group border rounded-lg overflow-hidden bg-white">
              <div className="h-44 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-[1.02] transition" />
              <div className="p-4">
                <h4 className="font-serif">{label}</h4>
                <p className="text-sm text-ink/70">A study in intention, texture, and flow.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section id="process" title="How We Work">
        <ol className="space-y-4">
          <li><strong>01 / Discovery:</strong> values, vision, constraints.</li>
          <li><strong>02 / Design:</strong> mood, materials, message.</li>
          <li><strong>03 / Build:</strong> vendors, logistics, sequencing.</li>
          <li><strong>04 / Deliver:</strong> showtime with white-glove oversight.</li>
        </ol>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" title="Notes From Clients">
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white border rounded-lg p-6 italic">
            “Flawless execution and soulful design. Vara turned our launch into an experience.”
          </blockquote>
          <blockquote className="bg-white border rounded-lg p-6 italic">
            “Every detail felt intentional. Our guests are still talking about it.”
          </blockquote>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Start Your Project">
        <form className="bg-white border rounded-lg p-6 grid md:grid-cols-2 gap-4">
          <input className="border rounded px-3 py-2" placeholder="Your name" />
          <input className="border rounded px-3 py-2" placeholder="Email" type="email" />
          <input className="md:col-span-2 border rounded px-3 py-2" placeholder="Company / Event" />
          <textarea className="md:col-span-2 border rounded px-3 py-2" rows={5} placeholder="Tell us about your event…" />
          <button type="button" className="btn">
            Send inquiry <ArrowRight size={18}/>
          </button>
        </form>
        <p className="text-sm mt-4 opacity-70">
          Prefer to book directly? Add your Calendly/Acuity link here.
        </p>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Vara Events</div>
          <div className="opacity-70">Holistic brand experiences & organic events.</div>
        </div>
      </footer>
    </div>
  );
}
