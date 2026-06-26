export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f4f3ef] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-[#6d8b74] font-semibold uppercase tracking-wide mb-3">
            Transparent Pricing
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-[#2f4138] mb-6">
            House Cleaning Prices.
                      </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
           Simple. Honest. Transparent.
          </p>

          <a
            href="#free-quote-form"
            className="inline-block mt-8 bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
          >
            Get My Free Quote
          </a>
        </div>
{/* STANDARD CLEANING PRICING */}

<div className="mt-20">

  <h3 className="text-4xl font-bold text-center text-[#2f4138] mb-4">
    Standard Cleaning
  </h3>

  <p className="text-center text-gray-600 mb-12">
    Typical pricing for recurring or one-time residential cleaning.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Apartment */}

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <div className="text-5xl mb-4">🏢</div>

      <h4 className="text-2xl font-bold text-[#2f4138]">
        Apartment
      </h4>

      <p className="text-4xl font-bold text-[#6d8b74] mt-4">
        $100-140
      </p>

      <p className="mt-4 text-gray-600">
        1–3 Bedroom Apartments
      </p>

      <ul className="mt-6 text-left space-y-2 text-gray-700">
        <li>✓ Kitchens</li>
        <li>✓ Bathrooms</li>
        <li>✓ Bedrooms</li>
        <li>✓ Living Areas</li>
      </ul>

    </div>

    {/* House */}

    <div className="bg-[#6d8b74] text-white rounded-3xl shadow-xl p-8 text-center scale-105">

      <div className="uppercase tracking-widest text-sm font-bold mb-3">
        MOST POPULAR
      </div>

      <div className="text-5xl mb-4">🏡</div>

      <h4 className="text-2xl font-bold">
        House
      </h4>

      <p className="text-5xl font-bold mt-4">
        $140-220
      </p>

      <p className="mt-4">
        Most 2–3 Bedroom Homes
      </p>

      <ul className="mt-6 text-left space-y-2">
        <li>✓ Kitchens</li>
        <li>✓ Bathrooms</li>
        <li>✓ Bedrooms</li>
        <li>✓ Living Areas</li>
      </ul>

    </div>

    {/* Large Home */}

    <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

      <div className="text-5xl mb-4">🏠</div>

      <h4 className="text-2xl font-bold text-[#2f4138]">
        Large Home
      </h4>

      <p className="text-4xl font-bold text-[#6d8b74] mt-4">
        $220+
      </p>

      <p className="mt-4 text-gray-600">
        4+ Bedrooms
      </p>

      <ul className="mt-6 text-left space-y-2 text-gray-700">
        <li>✓ Custom Quote</li>
        <li>✓ Flexible Scheduling</li>
        <li>✓ Fully Insured</li>
        <li>✓ Detail Focused</li>
      </ul>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}
