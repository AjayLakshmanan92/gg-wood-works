import Navbar from "./components/navbar";
import Home from "./components/home";
import Services from "./components/services";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./styles/main.css";
import WhatsAppButton from "./components/WhatsAppButton";
import WhyChooseUs from "./components/WhyChooseUs";



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />

    </>
  );
}

export default App;
