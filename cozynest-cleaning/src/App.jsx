// ==== EASY EDIT SETTINGS (edit these values anytime) ====
const SITE = {
  phone: "(608) 400-5820",
  smsLink: "sms:16084005820",
  serviceArea: "Serving the Madison Area",
  promoMain: "$20 OFF",
  promoSub: "First Cleaning",
  heroImage: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm cozy luxury kitchen with soft lighting and inviting decor",
  },
};

function App() {
  return (
    <div className="min-h-screen bg-[#f7f5f2] text-gray-800 font-sans">
      <section className="relative bg-gradient-to-b from-[#dfe8df] to-[#f7f5f2] px-6 py-20 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-[#56705f] shadow-sm mb-6">
              ✨ Professional • Reliable • Detail-Focused
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#2f4337]">
              A Cleaner Home.
              <br />
              A Cozier Life.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-700 max-w-xl">
              CozyNest Cleaning, LLC provides reliable, detail-focused cleaning services
              throughout the Madison area.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.smsLink}
                className="bg-[#56705f] text-white px-6 py-3 rounded-2xl shadow-lg text-lg font-medium"
              >
                Text for a Free Quote
              </a>
            </div>

            <div className="mt-8 flex gap-8 text-sm text-gray-600">
              <div>
                <p className="text-2xl font-bold text-[#56705f]">Fully</p>
                <p>Insured</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#56705f]">Limited</p>
                <p>Openings Available</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#56705f]">{SITE.promoMain}</p>
                <p>{SITE.promoSub}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-[2rem] shadow-2xl p-4">
              <img
                src={SITE.heroImage.src}
                alt={SITE.heroImage.alt}
                className="rounded-[1.5rem] object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-10 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#2f4337]">
              CozyNest Cleaning, LLC
            </h3>

            <p className="mt-3 text-gray-600 max-w-sm">
              Professional residential cleaning services proudly serving the Madison area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#2f4337] mb-3">Contact</h4>

            <ul className="space-y-2 text-gray-600">
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
