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
  href="#free-quote-form"
  className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
>
            Get a Free Quote
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
  alt="Cozy clean kitchen"
  className="rounded-[40px] shadow-2xl border-8 border-white"
/>
          />
        </div>
      </section>

      {/* ABOUT */}
      <section id="quote-form" className="bg-white py-20">
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
{/* SERVICES SECTION */}
<section className="bg-[#f4f3ef] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-5xl font-bold text-[#2f4337] mb-4">
        Cleaning Services
      </h2>

      <p className="text-gray-600 text-lg">
        Professional • Reliable • Detail-Focused
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* STANDARD CLEAN */}
      <div className="bg-white rounded-[32px] p-8 shadow-lg">
        <h3 className="text-3xl font-bold text-[#2f4337] mb-6">
          Standard Clean
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li>• Kitchen counters, sink & appliance exteriors</li>
          <li>• Bathroom cleaning and sanitizing</li>
          <li>• Dusting furniture and surfaces</li>
          <li>• Vacuum carpets and rugs</li>
          <li>• Steam mop floors</li>
          <li>• Trash removal</li>
        </ul>
      </div>

      {/* DEEP CLEAN */}
      <div className="bg-white rounded-[32px] p-8 shadow-lg">
        <h3 className="text-3xl font-bold text-[#2f4337] mb-6">
          Deep Clean
        </h3>

        <p className="text-gray-600 mb-4">
          Everything in Standard Clean, plus:
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>• Baseboards and trim</li>
          <li>• Interior windows (within reach)</li>
          <li>• Interior doors and door frames</li>
          <li>• Light switches and outlet covers</li>
          <li>• Detailed bathroom scrub</li>
          <li>• Inside kitchen cabinets and drawers</li>
          <li>• Appliance interiors cleaned</li>
          <li>• Fans and ceiling light fixtures</li>
          <li>• Furniture moved and cleaned around (as able)</li>
          <li>• Thorough dusting of hard-to-reach areas</li>
          <li>• Floors deep cleaned</li>
        </ul>
      </div>

      {/* ADD ON SERVICES */}
      <div className="bg-white rounded-[32px] p-8 shadow-lg">
        <h3 className="text-3xl font-bold text-[#2f4337] mb-6">
          Add On Services
        </h3>

        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between">
            <span>Baseboards</span>
            <span>$40</span>
          </li>

          <li className="flex justify-between">
            <span>Interior Windows</span>
            <span>$5-$7 each</span>
          </li>

          <li className="flex justify-between">
            <span>Inside Fridge</span>
            <span>$40</span>
          </li>

          <li className="flex justify-between">
            <span>Inside Oven</span>
            <span>$50</span>
          </li>

          <li className="flex justify-between">
            <span>Interior Kitchen Cabinets</span>
            <span>$60</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
     {/* TRUST BADGES */}
<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-6 text-center">

      <div className="bg-[#f4f3ef] rounded-[28px] p-6 shadow-md">
        <div className="text-4xl mb-3">🛡️</div>
        <h3 className="text-xl font-semibold text-[#2f4337] mb-2">
          Fully Insured
        </h3>
        <p className="text-gray-600">
          Professional and protected for your peace of mind.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-[28px] p-6 shadow-md">
        <div className="text-4xl mb-3">✨</div>
        <h3 className="text-xl font-semibold text-[#2f4337] mb-2">
          Attention to Detail
        </h3>
        <p className="text-gray-600">
          We focus on the small details that make your home shine.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-[28px] p-6 shadow-md">
        <div className="text-4xl mb-3">🏡</div>
        <h3 className="text-xl font-semibold text-[#2f4337] mb-2">
          Respectful of Your Home
        </h3>
        <p className="text-gray-600">
          Reliable, careful, and trustworthy cleaning service.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-[28px] p-6 shadow-md">
        <div className="text-4xl mb-3">💚</div>
        <h3 className="text-xl font-semibold text-[#2f4337] mb-2">
          Locally Owned
        </h3>
        <p className="text-gray-600">
          Proudly serving the Madison area with personalized care.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* QUOTE FORM */}
<section id="free-quote-form" className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-[#f4f3ef] rounded-[40px] p-10 shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-4">
        Request a Free Quote
      </h2>

      <p className="text-center text-gray-600 mb-10">
        Tell us about your home and cleaning needs.
      </p>

      <form
        action="https://formspree.io/f/mgodqrnz"
        method="POST"
        className="grid md:grid-cols-2 gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="p-4 rounded-2xl border border-gray-300"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="p-4 rounded-2xl border border-gray-300"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-4 rounded-2xl border border-gray-300 md:col-span-2"
        />

        <select
          name="service"
          className="p-4 rounded-2xl border border-gray-300 md:col-span-2"
        >
          <option>Recurring Cleaning</option>
          <option>Deep Cleaning</option>
          <option>Move-In / Move-Out Cleaning</option>
          <option>Vacation Rental Cleaning</option>
        </select>

        <textarea
          name="message"
          placeholder="Tell us about your home and what you need cleaned..."
          rows="5"
          className="p-4 rounded-2xl border border-gray-300 md:col-span-2"
        />

        <button
          type="submit"
          className="bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition md:col-span-2"
        >
          Request My Free Quote
        </button>
      </form>
    </div>
  </div>
</section>
   {/* GOOGLE REVIEWS */}
<section className="bg-white py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
      <div className="text-5xl mb-4">⭐️⭐️⭐️⭐️⭐️</div>

      <h2 className="text-4xl font-bold text-[#2f4337] mb-4">
        What Clients Are Saying
      </h2>

      <p className="text-gray-600 text-lg">
        Trusted by homeowners throughout the Madison area.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#f4f3ef] rounded-[32px] p-8 shadow-md">
        <div className="text-yellow-500 text-xl mb-4">
          ⭐️⭐️⭐️⭐️⭐️
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic">
          “My house has never looked better. CozyNest is reliable,
          professional, and incredibly detail-oriented.”
        </p>

        <div className="font-semibold text-[#2f4337]">
          — Sarah M.
        </div>
      </div>

      <div className="bg-[#f4f3ef] rounded-[32px] p-8 shadow-md">
        <div className="text-yellow-500 text-xl mb-4">
          ⭐️⭐️⭐️⭐️⭐️
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic">
          “The deep clean was amazing. Everything felt fresh,
          spotless, and cozy afterward.”
        </p>

        <div className="font-semibold text-[#2f4337]">
          — Emily R.
        </div>
      </div>

      <div className="bg-[#f4f3ef] rounded-[32px] p-8 shadow-md">
        <div className="text-yellow-500 text-xl mb-4">
          ⭐️⭐️⭐️⭐️⭐️
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic">
          “Super easy to work with and very trustworthy.
          Highly recommend CozyNest Cleaning.”
        </p>

        <div className="font-semibold text-[#2f4337]">
          — Jason T.
        </div>
      </div>

    </div>

    <div className="text-center mt-12">
      <a
        href="#free-quote-form"
        className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
      >
        Request Your Free Quote
      </a>
    </div>

  </div>
</section>
      {/* SERVICE AREA */}
<section className="bg-[#f4f3ef] py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl font-bold text-[#2f4337] mb-4">
      Proudly Serving the Madison Area
    </h2>

    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
      CozyNest Cleaning provides reliable, detail-focused residential cleaning
      services throughout Madison and surrounding communities.
    </p>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
      
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h3 className="font-bold text-[#2f4337] mb-3">Madison</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Downtown</li>
          <li>West Side</li>
          <li>East Side</li>
          <li>Near West</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h3 className="font-bold text-[#2f4337] mb-3">Dane County</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Middleton</li>
          <li>Fitchburg</li>
          <li>Sun Prairie</li>
          <li>DeForest</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h3 className="font-bold text-[#2f4337] mb-3">Additional Areas</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Waunakee</li>
          <li>Monona</li>
          <li>McFarland</li>
          <li>Cottage Grove</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-md">
        <h3 className="font-bold text-[#2f4337] mb-3">Need Something Else?</h3>
        <p className="text-gray-600 mb-4">
          Not sure if we service your area? Reach out and ask!
        </p>

        <a
          href="#free-quote-form"
          className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-5 py-3 rounded-2xl shadow-md transition"
        >
          Request a Quote
        </a>
      </div>

    </div>
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


