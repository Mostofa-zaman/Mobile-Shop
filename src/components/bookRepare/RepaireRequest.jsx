"use client";

import { useState } from "react";
import Container from "../common/Container";
import { MapPin, Clock3, ChevronDown, RefreshCw } from "lucide-react";

const gadgets = [
  "Mobile Phone",
  "Tablet",
  "Laptop",
  "Smartwatch",
  "Battery",
  "Accessories",
  "Other",
];

const inputClass =
  "h-[46px] w-full rounded-[7px] border border-[#d2d2d2] bg-[#fafafa] px-3 text-[16px] outline-none focus:border-blue-400";
const labelClass = "mb-1.5 block text-[18px] font-semibold text-[#222]";

export default function RepaireRequest() {
  const [formData, setFormData] = useState({
    gadget: "",
    model: "",
    problem: "",
    name: "",
    email: "",
    phone: "",
  });

  const [robot, setRobot] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!robot) {
      alert("Please verify that you are not a robot.");
      return;
    }
    console.log(formData);
  };
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-[1400px] px-6 lg:px-[60px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Repair Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-8 lg:pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="gadget" className={labelClass}>
                    Choose Gadget
                  </label>

                  <div className="relative">
                    <select
                      id="gadget"
                      name="gadget"
                      value={formData.gadget}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Choose device</option>
                      {gadgets.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="model" className={labelClass}>
                    Model of Gadget
                  </label>
                  <input
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="Example iPhone 19"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="problem" className={labelClass}>
                  Problem With Gadget?
                </label>
                <textarea
                  id="problem"
                  name="problem"
                  rows={6}
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="Write your gadget problem"
                  required
                  className={`${inputClass} h-auto min-h-[150px] p-3`}
                />
              </div>
              <div className="my-[49px] border-t border-[#bdbdbd]" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {["name", "email", "phone"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className={labelClass}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
              {/* Robot Verification UI */}
              <div className="mt-5 flex h-[76px] max-w-[302px] items-center justify-between rounded-[3px] border border-[#d2d2d2] bg-[#fafafa] px-3">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={robot}
                    onChange={(e) => setRobot(e.target.checked)}
                    className="h-7 w-7 accent-blue-600"
                  />
                  <span className="whitespace-nowrap text-sm">
                    I'm not a robot
                  </span>
                </label>
                <div className="flex flex-col items-center">
                  <RefreshCw
                    size={29}
                    strokeWidth={4}
                    className="text-blue-500"
                  />
                  <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-7 rounded-full bg-black px-9 py-3 text-[15px] font-semibold text-white transition hover:bg-[#ffdc00] hover:text-black"
              >
                Get a Quote
              </button>
            </form>
            {/* Contact Information */}
            <aside className="flex flex-col gap-6 lg:col-span-4">
              <div className="min-h-[260px] rounded-3xl bg-[#ffdc00] px-10 py-10">
                <MapPin size={37} strokeWidth={3} fill="black" />
                <h3 className="mt-3 text-xl font-semibold">
                  Visit Our Workshop
                </h3>
                <p className="mt-3 text-base leading-6">
                  Mirpur 10, Dhaka, Bangladesh
                </p>
                <a
                  href="https://www.google.com/maps/place/Mirpur-10,+Dhaka/@23.8028745,90.3645346,15z/data=!3m1!4b1!4m6!3m5!1s0x3755c0d33532b3fb:0x2b27b0c01cb2bc0d!8m2!3d23.8028556!4d90.3748344!16s%2Fg%2F11l66ssrrt?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-[41px] items-center justify-center rounded-full bg-black px-7 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Get Direction
                </a>
              </div>
              <div className="min-h-[196px] rounded-2xl bg-[#ffdc00] px-10 py-10">
                <Clock3 size={37} strokeWidth={2.5} />
                <h3 className="mt-3 text-xl font-semibold">We're Open Today</h3>
                <p className="mt-3 text-base leading-6">
                  Mon-Sat 9am-8pm, Sun 11am-6pm
                </p>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </section>
  );
}
