import React from 'react';
import { Smartphone, Tablet, Laptop, Gamepad, Watch, Code, Star } from 'lucide-react';
import Container from "@/components/common/Container"
import BatteryRepairTestimonialCard from '@/components/cardProviders/BatteryRepairTestimonialCard';
export default function Sidebar() {
  const menuItems = [
    { name: 'Phone Repair', icon: Smartphone, active: true },
    { name: 'Tablet Repair', icon: Tablet, active: false },
    { name: 'Laptop Repair', icon: Laptop, active: false },
    { name: 'PS5 / Xbox', icon: Gamepad, active: false },
    { name: 'Smartwatch', icon: Watch, active: false },
    { name: 'Software Repair', icon: Code, active: false },
  ];

  return (
  <section className ="pt-16 pb-24">

     <Container>
     <aside className="w-full lg:w-1/4 space-y-6">
      {/* Category Navigation */}
      <nav className="space-y-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={`w-full flex items-center justify-between p-10 rounded transition ${
                item.active
                  ? 'bg-slate-900 text-white font-medium'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 font-medium'
              }`}
            >
              <span className="flex items-center gap-3 text-sm">
                <Icon size={18} />
                {item.name}
              </span>
              <span className="text-xs">→</span>
            </button>
          );
        })}
      </nav>


   
    </aside>
   </Container>
  </section>
  );
}