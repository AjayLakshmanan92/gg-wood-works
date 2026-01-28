import img1 from "../assets/images/img11.jpeg";
import img2 from "../assets/images/img6.jpeg";
import img3 from "../assets/images/img14.jpeg";
import img4 from "../assets/images/img4.jpeg";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Our Works</h2>
      <div className="gallery-grid">
        {[img1, img2, img3, img4].map((img, i) => (
          <img key={i} src={img} alt="Carpentry work" />
        ))}
      </div>
    </section>
  );
}
