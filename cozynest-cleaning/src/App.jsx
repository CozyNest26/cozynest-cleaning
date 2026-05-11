const SITE = {
  name: 'CozyNest Cleaning, LLC',
  phone: '(608) 400-5820',
  serviceArea: 'Serving the Madison Area',
}

function App() {
  return (
    <div className="bg-[#f4f4ef] text-[#2f4337] min-h-screen font-sans">
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
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
            className="inline-block bg-[#6f8b74] hover:bg-[#5e7663] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
          >
            Text for a Free Quote
          </a>

          <div className="grid grid-cols-3 gap-6 mt-10 text-center">
            <div>
              <div className="text-4xl font-bold">Fully</div>
              <div className="text-lg">Insured</div>
            </div>

            <div>
              <div className="text-4xl font-bold">Limited</div>
              <div className="text-lg">Openings Available</div>
            </div>

            <div>
              <div className="text-4xl font-bold">$20 OFF</div>
              <div className="text-lg">First Cleaning</div>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
            alt="Cozy clean home"
            className="rounded-[2rem] shadow-2xl border-8 border-white"
          />
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Cleaning Services</h2>
          <p className="text-gray-600 text-lg mb-14">
            Professional cleaning tailored to your home and schedule.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f4f4ef] rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">🧼</div>
              <h3 className="text-2xl font-semibold mb-3">Standard Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                Routine cleaning to keep your home consistently fresh, clean,
                and comfortable.
              </p>
            </div>

            <div className="bg-[#f4f4ef] rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-3">Deep Cleaning</h3>
              <p className="text-gray-700 leading-relaxed">
                A detailed top-to-bottom clean perfect for first-time clients
                or seasonal refreshes.
              </p>
            </div>

            <div className="bg-[#f4f4ef] rounded-3xl p-8 shadow-sm">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-semibold mb-3">Move In / Move Out</h3>
              <p className="text-gray-700 leading-relaxed">
                Thorough cleaning services designed for moving transitions,
                rentals, and property turnovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Why Choose CozyNest?</h2>
          <p className="text-lg text-gray-700">
            Dependable, detail-oriented cleaning with a cozy touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Reliable Service</h3>
            <p className="text-gray-700 leading-relaxed">
              We show up on time, communicate clearly, and treat your home with
              care and respect.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Attention to Detail</h3>
            <p className="text-gray-700 leading-relaxed">
              We focus on the little details that make your home feel truly
              clean and comfortable.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Flexible Scheduling</h3>
            <p className="text-gray-700 leading-relaxed">
              Weekly, biweekly, monthly, or one-time cleanings available.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4">Locally Owned</h3>
            <p className="text-gray-700 leading-relaxed">
              Proudly serving Madison-area homes with personalized service and
              care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#6f8b74] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Cleaner, Cozier Home?
          </h2>

          <p className="text-xl mb-10 text-white/90">
            Contact CozyNest Cleaning today for your free quote.
          </p>

          <a
            href="sms:16084005820"
            className="inline-block bg-white text-[#2f4337] font-bold px-10 py-5 rounded-2xl shadow-xl hover:scale-105 transition"
          >
            Text {SITE.phone}
          </a>
        </div>
      </section>

      <footer className="bg-white py-12 px-6 border-t">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl font-bold mb-4">{SITE.name}</h3>
            <p className="text-gray-700 text-lg">
              Professional residential cleaning services proudly serving the
              Madison area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-4">Contact</h4>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li>{SITE.phone}</li>
              <li>{SITE.serviceArea}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
```
