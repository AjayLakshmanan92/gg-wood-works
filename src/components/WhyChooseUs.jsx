export default function WhyChooseUs() {
  const reasons = [
    {
      title: "40+ Years of Experience",
      description:
        "Four decades of hands-on craftsmanship delivering trusted, long-lasting woodwork for generations."
    },
    {
      title: "Cost-Effective Solutions",
      description:
        "We focus on smart material usage and honest pricing to give you the best value for money."
    },
    {
      title: "Quality Materials",
      description:
        "Only trusted and durable materials are used to ensure strength, safety, and longevity."
    },
    {
      title: "On-Time Delivery",
      description:
        "We respect your time and ensure projects are completed as promised without unnecessary delays."
    }
  ];

  return (
    <section className="why-choose">
      <h2>Why Choose GG Wood Works</h2>

      <div className="why-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="why-card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
