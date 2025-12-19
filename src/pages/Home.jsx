import { useEffect, useState } from "react";
import hero1 from "../assets/images/hero.jpg";
import hero2 from "../assets/images/hero1.jpg";
import hero3 from "../assets/images/hero4.jpg";

// Services
import s1 from "../assets/images/service-1.jpg";
import s2 from "../assets/images/service-2.jpg";
import s3 from "../assets/images/service-3.jpg";

// Gallery
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";

export default function Home() {
  const slides = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Horizontal mini cards data
  const highlights = [
    {
      img: hero2,
      title: "Our Vision",
      text: "We see beauty as confidence. Every style should make you feel radiant."
    },
    {
      img: hero3,
      title: "Our Passion",
      text: "Detail, precision, and elegance for every client and occasion."
    },
    {
      img: hero1,
      title: "Our Commitment",
      text: "Flawless and long-lasting looks using premium techniques."
    },
    {
      img: hero2,
      title: "Expert Artists",
      text: "Certified professionals with years of experience."
    }
    // {
    //   img: hero3,
    //   title: "Premium Products",
    //   text: "High-end makeup brands for perfect results."
    // }
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] overflow-hidden">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div className="text-white">
                <h1 className="font-heading text-4xl md:text-5xl mb-4">
                  {i === 0 && "Bridal Makeup"}
                  {i === 1 && "Luxury Beauty"}
                  {i === 2 && "Professional Makeup"}
                </h1>
                <p className="opacity-90 mb-6">
                  Elegance, confidence & perfection
                </p>
                <a href="/contact" className="btn btn-primary px-8">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= QUICK INFO ================= */}
      <section className="bg-soft py-14 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { title: "Experienced Artists", sub: "Certified professionals" },
            { title: "Quality Products", sub: "Premium makeup brands" },
            { title: "1000+ Clients", sub: "Happy & satisfied" },
            { title: "Timely Service", sub: "On-time perfection" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                {i + 1}
              </div>

              <h3 className="font-heading text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">
                {item.sub}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="py-16 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src={hero1}
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              About Our Studio
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a professional makeup studio specializing in bridal,
              party, and fashion makeup. Our goal is to enhance your
              natural beauty while making you feel confident and elegant.
            </p>
            <p className="text-gray-600 mb-6">
              With years of experience and premium products, we deliver
              flawless, long-lasting looks for every occasion.
            </p>

            <a href="/about" className="btn btn-primary">
              Know More
            </a>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-sm overflow-hidden
                   hover:shadow-2xl transition-all duration-500
                   hover:-translate-y-2"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  className="h-40 w-full object-cover
                       transition-transform duration-700
                       group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3
                  className="font-heading text-lg mb-2
                       transition-all duration-500
                       group-hover:text-primary"
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm text-gray-600
                       transition-all duration-500
                       group-hover:opacity-90"
                >
                  {item.text}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div
                className="h-1 w-0 bg-primary mx-auto
                     transition-all duration-500
                     group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </section>
      {/* ================= SMALL FEATURES ================= */}
      <section className="py-16 px-6 md:px-24 bg-soft">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {[
            {
              img: hero1,
              title: "HD Makeup",
              desc: "Flawless HD makeup for every occasion, using premium products and professional techniques."
            },
            {
              img: hero2,
              title: "Airbrush Finish",
              desc: "Smooth airbrush look that lasts long and enhances your natural beauty effortlessly."
            },
            {
              img: hero3,
              title: "Long Lasting",
              desc: "Makeup that stays perfect all day, ensuring you look flawless from morning to night."
            },
            {
              img: hero1,
              title: "Skin Friendly",
              desc: "Gentle products suitable for all skin types, safe and hypoallergenic."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg group h-72 md:h-96"
            >
              {/* Background Image */}
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h3 className="font-heading text-2xl md:text-3xl mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
      {/* ================= SERVICES ================= */}
      <section className="py-16 px-6 md:px-24 bg-soft">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">
          Our Services
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[s1, s2, s3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img src={img} className="w-full h-44 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-heading text-lg">
                  Service {i + 1}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ================= MINI SERVICES ================= */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="font-heading text-3xl text-center mb-8">
          More Services
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Bridal Makeup",
            "Party Makeup",
            "Engagement Look",
            "Reception Makeup",
            "Hair Styling",
            "Saree Draping",
            "Photoshoot Makeup",
            "Natural Look"
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-5 text-center hover:shadow-lg transition"
            >
              <h3 className="font-heading text-sm">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PACKAGES ================= */}
      <section className="py-16 px-6 md:px-24 bg-soft">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">
          Makeup Packages
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            { title: "Bridal Makeup", price: "₹25,000", desc: "HD makeup, hairstyle, draping" },
            { title: "Party Makeup", price: "₹8,000", desc: "Elegant party look" },
            { title: "Engagement Makeup", price: "₹15,000", desc: "Soft glam premium look" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="font-heading text-xl mb-2">{item.title}</h3>
              <p className="text-primary text-2xl font-semibold mb-3">
                {item.price}
              </p>
              <p className="text-gray-600 mb-5">{item.desc}</p>
              <a href="/contact" className="btn btn-outline">
                Book Now
              </a>
            </div>
          ))}

        </div>
      </section>
      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Absolutely loved my bridal look! Highly professional.",
            "Best makeup artist. Long lasting and flawless.",
            "Very friendly team and premium service."
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center"
            >
              <p className="text-gray-600 mb-4">“{text}”</p>
              <h4 className="font-heading">Happy Client</h4>
            </div>
          ))}
        </div>
      </section>
      {/* ================= STATS ================= */}
      <section className="py-14 px-6 md:px-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            { num: "1000+", label: "Happy Clients" },
            { num: "8+", label: "Years Experience" },
            { num: "50+", label: "Bridal Events" },
            { num: "100%", label: "Satisfaction" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold">{item.num}</h3>
              <p className="text-sm opacity-90">{item.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 px-6 md:px-24 bg-soft">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">
          Our Process
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            "Consultation",
            "Trial Makeup",
            "Final Look",
            "Event Day"
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-primary text-3xl font-bold mb-2">
                {i + 1}
              </div>
              <h3 className="font-heading">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">
          Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[g1, g2, g3, g1, g2, g3].map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-lg h-36 w-full object-cover hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-primary text-white py-16 px-6 md:px-24 text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4">
          Ready for Your Perfect Look?
        </h2>
        <p className="mb-6">
          Book your appointment now and experience beauty like never before.
        </p>
        <a href="/contact" className="btn btn-outline btn-white px-8">
          Contact Us
        </a>
      </section>
    </>
  );
}
