const services = [
  "Recurring Residential Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Apartment Cleaning",
  "Vacation Rental Cleaning",
  "Post-Construction Cleanup"
]

const testimonials = [
  {
    name: "Carol H.",
    text: "CozyNest transformed our home. Extremely professional and detail-oriented."
  },
  {
    name: "Peg H.",
    text: "Reliable, friendly, and my house has never looked better."
  },
  {
    name: "Jeffrey W.",
    text: "The easiest cleaning company I’ve ever worked with. Highly recommend."
  }
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#2f4337]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-block bg-white px-5 py-2 rounded-full text-sm shadow-sm mb-6">
            ✨ Professional • Reliable • Detail-Focused
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            A Cleaner Home.
            <br />
            A Cozier Life.
          </h1>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            CozyNest Cleaning, LLC provides reliable, detail-focused cleaning
            services throughout the Madison area.
          </p>

          <a
            href="sms:16084005820"
            className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
          >
            Text for a Free Quote
          </a>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <div className="text-3xl font-bold">Fully</div>
              <div className="text-gray-600">Insured</div>
            </div>

            <div>
              <div className="text-3xl font-bold">Limited</div>
              <div className="text-gray-600">Openings Available</div>
            </div>

            <div>
              <div className="text-3xl font-bold">$20 OFF</div>
              <div className="text-gray-600">First Cleaning</div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop"
            alt="Clean home"
            className="rounded-[40px] shadow-2xl border-8 border-white"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose CozyNest?</h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe a clean home creates peace of mind. CozyNest Cleaning
            provides dependable, detail-oriented cleaning services with a
            personal touch. Our goal is to make your life easier while giving
            you a home you truly enjoy coming back to.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Cleaning Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white p-8 rounded-3xl shadow-md"
              >
                <div className="text-2xl mb-4">✨</div>

                <h3 className="text-xl font-semibold mb-3">{service}</h3>

                <p className="text-gray-600">
                  Professional, detailed service customized to your home and
                  schedule.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            What Clients Are Saying
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-[#f4f3ef] p-8 rounded-3xl"
              >
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="font-semibold">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready for a Cleaner Home?
          </h2>

          <p className="text-xl text-gray-700 mb-10">
            Contact CozyNest Cleaning today for a free quote.
          </p>

          <a
            href="sms:16084005820"
            className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-10 py-5 rounded-2xl text-xl shadow-lg transition"
          >
            Text (608) 400-5820
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">
              CozyNest Cleaning, LLC
            </h3>

            <p className="text-gray-600">
              Professional residential cleaning services proudly serving the
              Madison area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4">Contact</h4>

            <ul className="space-y-2 text-gray-600">
              <li>(608) 400-5820</li>
              <li>Serving the Madison Area</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}


