import aboutImg from "../assets/images/hero1.jpg";

export default function About() {
  return (
    <>
      {/* banner */}
      <section className="relative h-[60vh] w-full">
        <img
          src={aboutImg}
          alt="About Makeup Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white animate-fade-up">
            <span className="uppercase font-bold tracking-[0.35em] text-xs text-primary">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl mt-4">
              Beauty With Purpose
            </h1>
            <p className="mt-6 max-w-2xl mx-auto opacity-90">
              Where passion meets precision, and beauty becomes timeless.
            </p>
          </div>
        </div>
      </section>

      {/* Story*/}
      <section className="bg-soft py-20 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <img
            src={aboutImg}
            alt="Our Story"
            className="rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
          />

          <div className="animate-fade-up">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Our Story
            </span>
            <h2 className="font-heading text-4xl mt-4 mb-6">
              Creating Confidence Through Beauty
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Makeup Studio was founded with a simple belief — beauty is not
              about perfection, it’s about confidence. We specialize in bridal,
              fashion, and professional makeup, enhancing your natural elegance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every look is carefully crafted using premium products, modern
              techniques, and personalized attention.
            </p>
          </div>
        </div>
      </section>

      {/* Values*/}
      <section className="py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
            Why Choose Us
          </span>
          <h2 className="font-heading text-4xl mt-4">
            Our Core Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              title: "Premium Products",
              desc: "We use only high-end, skin-safe products to ensure flawless results."
            },
            {
              title: "Expert Artists",
              desc: "Highly trained professionals with years of experience."
            },
            {
              title: "Personalized Care",
              desc: "Every look is tailored to your style, skin tone, and occasion."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="font-heading text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact*/}
      <section className="bg-primary text-white py-20 px-6 md:px-24 text-center rounded-t-[3rem]">
        <h2 className="font-heading text-4xl mb-6">
          Let's Create Your Perfect Look
        </h2>
        <p className="mb-8 max-w-xl mx-auto opacity-90">
          Whether it’s your big day or a special occasion, we’re here to make
          you shine.
        </p>
        <a
          href="/contact"
          className="btn btn-outline btn-white hover:bg-white hover:text-primary tracking-widest transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
    </>
  );
}
