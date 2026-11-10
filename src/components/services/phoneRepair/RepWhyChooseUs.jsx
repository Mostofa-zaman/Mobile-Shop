import React from 'react';
import { Check } from 'lucide-react';

export default function RepWhyChooseUs() {
  const features = [
    {
      title: 'Expert Technicians',
      desc: 'Our repair team consists of highly skilled and certified technicians with extensive experience in diagnosing and fixing a wide range of devices.',
    },
    {
      title: 'Quick Turnaround',
      desc: 'We understand the importance of your device, and we strive to provide fast and efficient service, aiming for quick turnaround times to minimize your downtime.',
    },
    {
      title: 'Transparent Pricing',
      desc: "Our pricing is transparent and competitive. You'll receive a clear and detailed estimate before we begin any repairs, and there are no hidden fees.",
    },
    {
      title: 'Quality Parts',
      desc: 'We use only high-quality, parts for repairs, ensuring the longevity and optimal performance of your device after the service.',
    },
    {
      title: 'Wide Range of Repairs',
      desc: 'From cracked screens and battery replacements to complex motherboard issues, we offer a comprehensive range of repair services for various devices.',
    },
    {
      title: 'Satisfaction Guarantee',
      desc: "Your satisfaction is our priority. We stand behind our work and offer a customer satisfaction guarantee to ensure you're happy with the results.",
    },
  ];

  return (
    <section className="space-y-6 mt-15 mb-25">
      <div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
          TOP REASONS
        </span>
        <h2 className="text-2xl font-bold text-slate-900">Why Choose Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="w-12 h-12 bg-amber-400 flex items-center justify-center rounded">
              <Check size={30} className="text-slate-900 stroke-[3]" />
            </div>
            <h4 className="font-bold text-[20px] text-slate-900">{item.title}</h4>
            <p className="text-sm text-gray-500 leading-6 w-[220px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}