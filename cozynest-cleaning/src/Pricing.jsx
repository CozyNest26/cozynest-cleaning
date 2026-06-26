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
            No Surprises.
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every home is unique, but we believe you should have a good idea
            of what to expect before requesting a quote.
          </p>

          <a
            href="#free-quote-form"
            className="inline-block mt-8 bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition"
          >
            Get My Free Quote
          </a>
        </div>

      </div>
    </section>
  );
}
