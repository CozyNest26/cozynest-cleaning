import React from "react";

export default function Pricing() {
  const addOns=[
    ["🪟","Interior Windows","Starting at $40"],
    ["🍳","Inside Oven","Starting at $35"],
    ["❄️","Inside Refrigerator","Starting at $35"],
    ["🚪","Cabinet Interiors","Starting at $45"],
    ["🧹","Baseboards","Custom Quote"],
    ["🧺","Laundry","Available Upon Request"],
  ];
  const faqs=[
    ["Do you provide free estimates?","Yes! Every estimate is free."],
    ["Do I need to be home?","No. Many clients provide access ahead of time."],
    ["Do you bring supplies?","Yes, we bring professional supplies and equipment."],
    ["How do I pay?","Cash, check, Apple Pay and other accepted payment methods."]
  ];
  return (
<section id="pricing" className="bg-[#f4f3ef] py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="uppercase tracking-[.3em] text-[#6d8b74] font-semibold">House Cleaning Prices</p>
<h1 className="text-5xl md:text-6xl font-bold text-[#2f4138] mt-3">Simple. Honest. Transparent.</h1>
<p className="max-w-3xl mx-auto mt-6 text-xl text-gray-700">Typical pricing for homes in Madison and surrounding communities. Final pricing depends on size, condition, pets and requested services.</p>
<a href="#free-quote-form" className="inline-block mt-8 bg-[#6d8b74] hover:bg-[#58705e] text-white px-8 py-4 rounded-2xl shadow-lg">Get My Free Quote</a>
</div>
<h2 className="text-4xl font-bold text-center text-[#2f4138] mb-10">Standard Cleaning</h2>
<div className="grid md:grid-cols-3 gap-8 mb-8">
{[["🏢","Apartment","$100–140","Perfect for apartments"],["🏡","House","$140–220","Most Popular"],["🏠","Large Home","$220+","Custom pricing"]].map((c,i)=><div key={i} className={`rounded-3xl p-8 shadow-lg text-center ${i===1?"bg-[#6d8b74] text-white":"bg-white"}`}><div className="text-5xl">{c[0]}</div><h3 className="text-2xl font-bold mt-4">{c[1]}</h3><p className="text-4xl font-bold mt-4">{c[2]}</p><p className="mt-4">{c[3]}</p></div>)}
</div>
<p className="text-center text-gray-600 mb-16">Includes kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming and mopping.</p>
<div className="bg-white rounded-3xl shadow-lg p-10 mb-16"><h2 className="text-4xl font-bold text-[#2f4138] mb-6">✨ Deep Cleaning</h2><p>Apartment: $180–240<br/>House: $220–340<br/>Large Home: $340–500+</p></div>
<div className="bg-[#6d8b74] text-white rounded-3xl p-10 mb-16"><h2 className="text-4xl font-bold mb-4">📦 Move-Out Cleaning</h2><p>Apartment: $180–260<br/>House: $220–400<br/>Large Home: $400–600+</p></div>
<div className="bg-white rounded-3xl shadow-lg p-10 mb-16"><h2 className="text-4xl font-bold text-[#2f4138] mb-4">🏢 Property Managers</h2><p>Custom pricing for apartment turnovers, rental homes, student housing and recurring portfolios.</p></div>
<h2 className="text-4xl font-bold text-center text-[#2f4138] mb-8">Add-On Services</h2>
<div className="grid md:grid-cols-3 gap-6 mb-16">{addOns.map((a,i)=><div key={i} className="bg-white rounded-2xl shadow p-6 text-center"><div className="text-4xl">{a[0]}</div><h3 className="font-bold mt-3">{a[1]}</h3><p className="text-[#6d8b74] font-semibold mt-2">{a[2]}</p></div>)}</div>
<div className="bg-white rounded-3xl shadow-lg p-10 mb-16"><h2 className="text-4xl font-bold text-[#2f4138] mb-6">Frequently Asked Questions</h2>{faqs.map((f,i)=><div key={i} className="mb-5"><h3 className="font-bold">{f[0]}</h3><p>{f[1]}</p></div>)}</div>
<div className="bg-[#2f4138] text-white rounded-3xl p-12 text-center"><h2 className="text-4xl font-bold">Ready for a Cleaner Home?</h2><p className="mt-4 text-xl">(608) 400-5820</p><p>www.cozynestcleaningwi.com</p><a href="#free-quote-form" className="inline-block mt-8 bg-white text-[#2f4138] px-8 py-4 rounded-2xl font-bold">Request My Free Quote</a></div>
</div>
</section>);
}
