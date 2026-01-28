export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <p>📞 Phone: +91 9994522714</p>

      <p>
        💬 WhatsApp:{" "}
        <a
          href="https://wa.me/919994522714"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here
        </a>
      </p>

      <p>📍 Kumbakonam & nearby areas</p>

      <div className="map-container">
        <div className="map-inner">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d244.80967665708818!2d79.38932790500084!3d10.966782415967169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d10.9667867!2d79.3894473!5e0!3m2!1sen!2sin!4v1769576808577!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
