const Testimonial_data = {
  testimonials: [
    {
      name: "John Doe",
      message: "This is an amazing service! Highly recommend.",
      img: "https://example.com/john-doe.jpg",
    },
    {
      name: "Jane Smithe",
      message: "A fantastic experience from start to finish.",
      img: "https://example.com/jane-smith.jpg",
    },
  ],
};
function Testimonials() {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="Testimonials-Grid">
        {Testimonial_data.testimonials.map((testimonial, index) => (
          <div key={index} className="Testimonial-Card">
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
