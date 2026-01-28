export default function Services() {
  const services = [
    {
      title: "Custom Furniture",
      description:
        "Tailor-made furniture crafted to your space, style, and budget — built to last with premium materials."
    },
    {
      title: "Wardrobes & Cupboards",
      description:
        "Smart storage solutions designed for maximum space, durability, and value — no wasted wood, no wasted cost."
    },
    {
      title: "Kitchen Cabinets",
      description:
        "Strong, functional kitchen cabinets with clean finishing, built for daily use and long-term reliability."
    },
    {
      title: "Wood Repair & Maintenance",
      description:
        "Cost-effective repair and restoration that extends the life of your furniture without unnecessary replacements."
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
