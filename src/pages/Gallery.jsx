import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";

const images = [g1, g2, g3];

export default function Gallery() {
  return (
    <section className="bg-white py-14 px-5 md:px-34">
      {/* Heading */}
      <div className="text-center mb-20">
        <span className="text-primary font-bold uppercase tracking-[0.25em] text-xs">
          Portfolio
        </span>
        <h2 className="font-heading text-4xl md:text-5xl mt-4 text-dark">
          Our Makeup Work
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          A glimpse of our bridal, party, and professional makeup artistry.
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {images.map((img, index) => (
          <label
            key={index}
            htmlFor={`gallery-${index}`}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500">
              <img
                src={img}
                alt="Makeup work"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Modal */}
            <input
              type="checkbox"
              id={`gallery-${index}`}
              className="modal-toggle"
            />
            <div className="modal">
              <div className="modal-box max-w-xl p-0 rounded-2xl">
                <img src={img} className="w-full rounded-xl" />
              </div>
              <label className="modal-backdrop" htmlFor={`gallery-${index}`} />
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
