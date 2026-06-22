const services = [
  "Recurring Residential Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out Cleaning",
  "Apartment Cleaning",
  "Vacation Rental Cleaning",
  "Post-Construction Cleanup",
  "Property Management Cleaning"
]

const testimonials = [
  {
    name: "Carol H.",
    text: "CozyNest transformed our home. Extremely professional and detail-oriented."
  },
  {
    name: "Peg H.",
    text: "Jenna is amazing! She's completely transformed my house. She's cleaned things I didn't even think of asking her to clean, is extremely attentive to detail, and extremely flexile. She's such a delight I highly recommend her!"
  },
  {
    name: "Jeffrey W.",
    text: "The easiest cleaning company I’ve ever worked with. Highly recommend."
  }
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f3ef] text-[#2f4337]">
      
{/* NAVIGATION */}
<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center">

    <div className="font-bold text-2xl text-[#2f4337]">
      CozyNest Cleaning
    </div>

    <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium">
      <a href="#services" className="hover:text-[#6d8b74]">
        Services 
      </a>
      <a href="#property-management" className="hover:text-[#6d8b74]">
  Property Managers
</a>
      <a href="#gallery" className="hover:text-[#6d8b74]">
       <a href="#move-out-cleaning" className="hover:text-[#6d8b74]">
  Move-Out Cleaning
</a>
        Gallery
      </a>

      <a href="#faq" className="hover:text-[#6d8b74]">
        FAQ
      </a>

      <a href="#free-quote-form" className="hover:text-[#6d8b74]">
        Free Quote
      </a>
    </div>

  </div>
</nav>
     {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <div className="inline-block bg-white px-5 py-2 rounded-full text-sm shadow-sm mb-6">
            ✨ Professional • Reliable • Detail-Focused
          </div>
  <>
  <h2 className="text-lg md:text-xl font-semibold text-[#6d8b74] mb-2">
    House Cleaning, Move-Out Cleaning & Property Management Cleaning Services in the Madison, WI area
  </h2>

  <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
    A Cleaner Home.
    <br />
    A Cozier Life.
  </h1>
</>
<h2 className="text-2xl md:text-3xl font-semibold text-[#6d8b74] mb-6">
  CozyNest Cleaning, LLC
</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
  House Cleaning, Deep Cleaning, and Move-Out Cleaning Services in Madison, Wisconsin —
  reliable, detail-focused, and fully insured to keep your home
  fresh, spotless, and cozy.
</p>
          <a
  href="#free-quote-form"
  className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
>
            Get a Free Quote
          </a>
          
        <p className="mt-4 text-lg font-bold text-[#2f4138]">
  📞 Text or Call: (608) 400-5820
</p>  
       <div className="flex flex-col md:flex-row gap-6 mt-12 justify-center">
  <div className="bg-white rounded-3xl p-6 text-center shadow-md w-full md:w-64">
    <div className="text-4xl mb-3">🛡️</div>

    <h3 className="text-2xl font-semibold text-[#2f4337]">
      Fully Insured
    </h3>

    <p className="text-gray-600 mt-2">
      Peace of mind
    </p>
  </div>

  <div className="bg-white rounded-3xl p-6 text-center shadow-md w-full md:w-64">
    <div className="text-4xl mb-3">✨</div>

    <h3 className="text-2xl font-semibold text-[#2f4337]">
      Accepting New Clients
    </h3>

    <p className="text-gray-600 mt-2">
      Availability This Month
    </p>
  </div>

  <div className="bg-white rounded-3xl p-6 text-center shadow-md w-full md:w-64">
    <div className="text-4xl mb-3">🧼</div>

    <h3 className="text-2xl font-semibold text-[#2f4337]">
      $25 OFF
    </h3>

    <p className="text-gray-600 mt-2">
      Your Next Cleaning
    </p>
  </div>
</div>
        </div>  
        <div>
         <img
  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop"
  alt="Cozy clean kitchen"
  className="rounded-[40px] shadow-2xl border-8 border-white"

          />
        </div>
      </section>
      {/* SUMMER VIEW SPECIAL */}
<section className="max-w-5xl mx-auto px-6 py-10">
  <div className="bg-gradient-to-r from-[#f8f6f1] to-[#eef4ee] rounded-[40px] p-10 shadow-lg text-center border border-white">

<img
  src="/summer-view.jpg"
  alt="Bright room with clean windows overlooking water"
  className="rounded-3xl w-full h-[450px] object-cover mb-6"
/>
    <h2 className="text-4xl font-bold text-[#2f4337] mb-4">
      Summer View Special
    </h2>

    <p className="text-xl text-gray-700 mb-4 italic">
      Sunshine looks better through clean windows.
    </p>

    <p className="text-3xl font-bold text-[#6d8b74] mb-6">
      25% OFF Interior Window Cleaning
    </p>

    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
      Add interior window cleaning to any CozyNest Cleaning service and enjoy
      brighter rooms, more natural light, and crystal-clear summer views.
    </p>
    <p className="text-sm font-semibold text-[#6d8b74] mb-6">
     Limited-Time Offer • Ends August 31, 2026
    </p>
    <a
      href="#free-quote-form"
      className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
    >
      Claim My Summer Special
    </a>

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
            Text or call (608) 400-5820
          </a>
        </div>
      </section>
{/* SERVICES SECTION */}
<section
  id="services"
  className="py-20 bg-cover bg-center relative"
  style={{
    backgroundImage:
      "linear-gradient(rgba(244,243,239,0.92), rgba(244,243,239,0.92)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop')"
  }}
>
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
        <div className="text-4xl mt-8 text-center">
  🧼 ✨ 🏡
</div>
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
      <div className="text-4xl mt-8 text-center">
  🛁 ✨ 🧽
</div>
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
      <div className="text-4xl mt-8 text-center">
  🪟 🧴 🍋
</div>
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
  type="hidden"
  name="_next"
  value="https://www.cozynestcleaningwi.com/thank-you"
/>
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
  onClick={() =>
    window.gtag?.('event', 'quote_request_started', {
      event_category: 'Lead',
      event_label: 'Quote Form',
    })
  }
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
          — Carol S.
        </div>
      </div>

      <div className="bg-[#f4f3ef] rounded-[32px] p-8 shadow-md">
        <div className="text-yellow-500 text-xl mb-4">
          ⭐️⭐️⭐️⭐️⭐️
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic">
          “Jenna at Cozynest Cleaning always does a great job cleaning my apartment! 
          Her attention to detail, timeliness, and work ethic are the reasons 
          I keep asking her back - highly, highly recommend.”
        </p>

        <div className="font-semibold text-[#2f4337]">
          — Alyssa T.
        </div>
      </div>

      <div className="bg-[#f4f3ef] rounded-[32px] p-8 shadow-md">
        <div className="text-yellow-500 text-xl mb-4">
          ⭐️⭐️⭐️⭐️⭐️
        </div>

        <p className="text-gray-700 leading-relaxed mb-6 italic">
          “Jenna is amazing! She’s completely transformed my house. 
          She’s cleaned things I didn’t even think of asking her to clean, 
          is extremely attentive to detail, and extremely flexible. 
          She’s such a delight I highly recommend her!.”
        </p>

        <div className="font-semibold text-[#2f4337]">
          — Peg H.
        </div>
      </div>

    </div>
    {/* PROPERTY MANAGEMENT SECTION */}

<section id="property-management" className="max-w-7xl mx-auto px-6 py-20">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-[#2f4138] mb-4">
      Property Management & Rental Turnover Cleaning
    </h2>

    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Reliable turnover cleaning services for property managers,
      landlords, apartment communities, and rental property owners
      throughout Madison and surrounding areas.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* Services Card */}
    <div className="bg-white rounded-3xl p-8 shadow-md">
      <h3 className="text-2xl font-semibold text-[#6d8b74] mb-6">
        Turnover Cleaning Includes
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>✔ Kitchen cleaning & sanitizing</li>
        <li>✔ Appliance exterior cleaning</li>
        <li>✔ Bathroom cleaning & disinfecting</li>
        <li>✔ Dusting all surfaces</li>
        <li>✔ Vacuuming carpets & rugs</li>
        <li>✔ Steam mopping hard floors</li>
        <li>✔ Trash removal</li>
        <li>✔ Spot cleaning doors, trim & baseboards</li>
        <li>✔ Interior window cleaning available</li>
      </ul>
    </div>

    {/* Why Choose Us Card */}
    <div className="bg-white rounded-3xl p-8 shadow-md">
      <h3 className="text-2xl font-semibold text-[#6d8b74] mb-6">
        Why Property Managers Choose CozyNest
      </h3>

      <ul className="space-y-4 text-gray-700">
        <li>🛡 Fully Insured</li>
        <li>📅 Reliable Scheduling</li>
        <li>🧹 Detail-Focused Cleaning</li>
        <li>🏢 Apartment & Rental Experience</li>
        <li>📱 Easy Communication by Text</li>
        <li>⭐ Move-In Ready Results</li>
      </ul>
    </div>

  </div>

  <div className="bg-[#f8f8f5] rounded-3xl p-10 mt-12 text-center shadow-sm">
    <h3 className="text-3xl font-semibold text-[#2f4138] mb-4">
      Serving Property Managers Across Madison
    </h3>

    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
      Whether you manage a single rental property or multiple apartment
      communities, CozyNest Cleaning provides dependable turnover
      cleaning to help get units move-in ready quickly and professionally.
    </p>

    <a
      href="#free-quote-form"
      className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
    >
      Request Property Management Pricing
    </a>

    <p className="mt-6 text-lg font-bold text-[#2f4138]">
      📞 Text or Call: (608) 400-5820
    </p>
  </div>
</section>
    {/* MOVE OUT CLEANING SECTION */}

<section
  id="move-out-cleaning"
  className="max-w-7xl mx-auto px-6 py-20"
>
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-[#2f4138] mb-4">
      Move-Out Cleaning Services
    </h2>

    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Moving is stressful enough. Let CozyNest Cleaning handle the cleaning so
      you can focus on your next home.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-10">

    <div className="bg-white rounded-3xl p-8 shadow-md">
      <h3 className="text-2xl font-semibold text-[#6d8b74] mb-6">
        What's Included
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>✔ Deep kitchen cleaning</li>
        <li>✔ Appliance exterior cleaning</li>
        <li>✔ Bathroom sanitizing</li>
        <li>✔ Cabinet and drawer wipe-downs</li>
        <li>✔ Dusting throughout the home</li>
        <li>✔ Vacuuming all floors</li>
        <li>✔ Steam mopping hard surfaces</li>
        <li>✔ Baseboards and trim spot cleaning</li>
        <li>✔ Trash removal</li>
      </ul>
    </div>

    <div className="bg-white rounded-3xl p-8 shadow-md">
      <h3 className="text-2xl font-semibold text-[#6d8b74] mb-6">
        Perfect For
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>🏠 Homeowners preparing to sell</li>
        <li>📦 Families moving to a new home</li>
        <li>🏢 Apartment move-outs</li>
        <li>🔑 Rental property turnovers</li>
        <li>🏘️ Landlords and property managers</li>
        <li>✨ Move-in ready preparation</li>
      </ul>
    </div>

  </div>

  <div className="bg-[#f8f8f5] rounded-3xl p-10 mt-12 text-center shadow-sm">
    <h3 className="text-3xl font-semibold text-[#2f4138] mb-4">
      Leave Your Space Spotless
    </h3>

    <p className="text-gray-700 max-w-3xl mx-auto mb-8">
      Whether you're moving out of an apartment, rental property, or family
      home, our detail-focused cleaning helps leave the space fresh, clean,
      and ready for its next occupants.
    </p>

    <a
      href="#free-quote-form"
      className="inline-block bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
    >
      Request Move-Out Cleaning Pricing
    </a>

    <p className="mt-6 text-lg font-bold text-[#2f4138]">
      📞 Text or Call: (608) 400-5820
    </p>
  </div>
</section>
    {/* BEFORE & AFTER GALLERY */}
<section id="gallery" className="bg-[#f4f3ef] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      Before & After Results
    </h2>

    <p className="text-center text-gray-600 mb-12">
      See the CozyNest Cleaning difference.
    </p>

    {/* Bathroom */}
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div>
        <img
          src="/bath before.jpg"
          alt="Bathroom before cleaning"
          className="rounded-3xl shadow-lg w-full"
        />
        <p className="text-center mt-3 font-semibold text-lg">
          Before
        </p>
      </div>

      <div>
        <img
          src="/bath after.jpg"
          alt="Bathroom after cleaning"
          className="rounded-3xl shadow-lg w-full"
        />
        <p className="text-center mt-3 font-semibold text-lg">
          After
        </p>
      </div>
    </div>

    {/* Oven */}
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <img
          src="/oven before.jpg"
          alt="Oven before cleaning"
          className="rounded-3xl shadow-lg w-full"
        />
        <p className="text-center mt-3 font-semibold text-lg">
          Before
        </p>
      </div>

      <div>
        <img
          src="/oven after.jpg"
          alt="Oven after cleaning"
          className="rounded-3xl shadow-lg w-full"
        />
        <p className="text-center mt-3 font-semibold text-lg">
          After
        </p>
      </div>
    </div>

  </div>
</section>
{/* FAQ */}
<section id="faq" className="bg-white py-20">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Answers to some of our most common questions.
    </p>

    <div className="space-y-6">
      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          Are you fully insured?
        </h3>
        <p className="text-gray-700">
          Yes! CozyNest Cleaning is fully insured, giving you peace of mind while we work in your home.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          Do I need to be home during the cleaning?
        </h3>
        <p className="text-gray-700">
          Not at all. Many clients provide access instructions and return to a freshly cleaned home. We will work with you to find the option that is most comfortable and convenient.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          Do you bring your own cleaning supplies and equipment?
        </h3>
        <p className="text-gray-700">
          Yes, we provide professional cleaning products and equipment. If you have specific product preferences or sensitivities, we're happy to discuss accommodations.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          How often should I schedule cleaning services?
        </h3>
        <p className="text-gray-700">
          We offer one-time cleanings as well as recurring weekly, bi-weekly, and monthly services. We'll help you choose a schedule that fits your home and lifestyle.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          How much does house cleaning cost?
        </h3>
        <p className="text-gray-700">
          Pricing depends on the size of your home, the level of cleaning needed, and any add-on services requested. Contact us for a free, personalized quote.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          Are pets okay during the cleaning?
        </h3>
        <p className="text-gray-700">
          Absolutely! We love pets. Please let us know about any special instructions or concerns so we can ensure a safe and stress-free experience for everyone.
        </p>
      </div>

      <div className="bg-[#f4f3ef] rounded-3xl p-6">
        <h3 className="font-semibold text-xl mb-2">
          How do I get started?
        </h3>
        <p className="text-gray-700">
          Simply request a free quote through our website, call, or text us. We'll discuss your needs, answer any questions, and schedule your cleaning at a time that works for you.
        </p>
      </div>
    </div>
  </div>
</section>
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
      <p className="text-center text-gray-600 mt-10 max-w-4xl mx-auto">
  CozyNest Cleaning provides property management cleaning,
  apartment turnover cleaning, rental turnover cleaning,
  move-out cleaning, and vacant unit cleaning services in
  Madison, Sun Prairie, DeForest, Windsor, Waunakee,
  Middleton, Fitchburg, Monona, and Verona, Wisconsin.
</p>      
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


