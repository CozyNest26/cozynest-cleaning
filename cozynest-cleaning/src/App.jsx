const SITE = {

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
