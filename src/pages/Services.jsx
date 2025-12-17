import serviceHero from "../assets/images/hero1.jpg";
import s1 from "../assets/images/service-1.jpg";
import s2 from "../assets/images/service-2.jpg";
import s3 from "../assets/images/service-3.jpg";

const services = [
  {
    title: "Bridal Makeup",
    desc: "Timeless bridal makeup crafted to enhance your natural beauty on your special day.",
    img: s1,
  },
  {
    title: "Party & Occasion Makeup",
    desc: "Glam looks tailored for receptions, engagements, and special celebrations.",
    img: s2,
  },
  {
    title: "Professional Makeup",
    desc: "Perfect for photoshoots, fashion shows, and professional events.",
    img: s3,
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh]">
        <img
          src={serviceHero}
          alt="Makeup Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white animate-fade-up">
            <span className="uppercase tracking-[0.4em] text-xs text-primary">
              Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl mt-4">
              Our Expertise
            </h1>
            <p className="mt-6 max-w-2xl mx-auto opacity-90">
              Premium beauty services designed with elegance, confidence,
              and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-28 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden
              bg-soft
              shadow-[0_15px_40px_rgba(0,0,0,0.08)]
              hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)]
              transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* Content */}
              <div className="p-10 text-center">
                <h3 className="font-heading text-2xl mb-4 text-dark">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <a
                  href="/contact"
                  className="inline-block
                  border border-primary text-primary
                  rounded-full px-10 py-2 text-xs
                  tracking-[0.3em]
                  hover:bg-primary hover:text-white
                  transition"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-24 px-6 md:px-24 text-center rounded-t-3xl">
        <h2 className="font-heading text-4xl mb-6">
          Let’s Create Your Perfect Look
        </h2>
        <p className="mb-10 opacity-90">
          Book your session today and experience luxury beauty services.
        </p>

        <a
          href="/contact"
          className="inline-block
          border border-white text-white
          rounded-full px-12 py-3 text-xs
          tracking-[0.35em]
          hover:bg-white hover:text-primary
          transition"
        >
          CONTACT US
        </a>
      </section>
    </>
  );
}
