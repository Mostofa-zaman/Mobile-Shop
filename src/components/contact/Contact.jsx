
"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/common/Container";

const contactImage = "/images/CImg.png";
const shopAddress = "Mirpur 10, Dhaka, Bangladesh";

const inputClass =
  "w-full rounded-md border border-white/10 bg-[#26383B] px-4 py-3 text-sm outline-none focus:border-[#FFDF00]";

const contactFields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    id: "email",
    label: "Your Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "phone",
    label: "Your Phone",
    type: "tel",
    placeholder: "Enter your phone number",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <section className="w-full bg-[#1C2326] py-24 text-white">
      <Container>
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
          {/* Contact Image */}
          <div className="relative min-h-[450px] lg:min-h-[550px]">
            <Image
              src={contactImage}
              alt="Customer Support"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-3xl font-bold md:text-4xl">
                Need Help With Your Device?
              </h2>

              <p className="mt-3 max-w-sm text-gray-200">
                Contact our expert team for professional repair services.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#203033] px-6 py-12 sm:px-10 lg:px-14">
            <p className="mb-4 text-sm font-bold tracking-[3px] text-[#FFDF00]">
              CONTACT US
            </p>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Get In Touch
            </h2>

            <p className="mb-8 text-sm leading-7 text-gray-400">
              Have a question or need a repair? Send us a message.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {contactFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-sm"
                  >
                    {field.label}
                  </label>

                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-fit rounded-full bg-[#FFDF00] px-7 py-3 text-sm font-bold text-black transition hover:bg-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-8 h-[350px] overflow-hidden rounded-2xl border border-white/10 md:h-[420px]">
          <iframe
            title="Shop Location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(shopAddress)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
