import contactImg from "../assets/images/hero4.jpg";

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh]">
        <img
          src={contactImg}
          alt="Contact Makeup Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white animate-fade-up">
            <span className="uppercase tracking-[0.35em] text-xs text-primary">
              Contact
            </span>
            <h1 className="font-heading text-4xl md:text-6xl mt-4">
              Get In Touch
            </h1>
            <p className="mt-6 max-w-2xl mx-auto opacity-90">
              Let’s discuss your perfect look for your special occasion
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-soft py-20 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* Info */}
          <div className="animate-fade-up">
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
              Contact Info
            </span>

            <h2 className="font-heading text-4xl mt-4 mb-6">
              We’d Love To Hear From You
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              Whether it's bridal makeup, party glam, or professional services,
              reach out and we'll get back to you quickly.
            </p>

            <div className="space-y-6 font-body text-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                </div>
                <p>Dindigul, Tamil Nadu, India</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>

                </div>
                <p>+91 78717 93780</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p>kasthu.cloud@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 animate-fade-up">
            <h3 className="font-heading text-2xl mb-6">
              Send a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full mt-2 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full mt-2 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your event..."
                  className="textarea textarea-bordered w-full mt-2 border-primary/30 focus:border-primary"
                />
              </div>
              <button className="btn btn-md bg-primary text-white rounded-md tracking-widest hover:bg-primary/60 transition px-5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map / CTA */}
      <section className="py-20 px-6 md:px-24 text-center">
        <h2 className="font-heading text-4xl mb-6">
          Visit Our Studio
        </h2>
        <p className="text-gray-600 mb-10">
          We are located in the heart of the city easy to reach and welcoming.
        </p>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Dindigul,%20Tamil%20Nadu&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}
