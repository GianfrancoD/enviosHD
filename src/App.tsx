// src/app/page.tsx o donde estés definiendo tus rutas
import "./App.css";
import { AboutUs } from "./modules/about/about-us";
// import { FeaturedImages } from "./modules/focus/focus";
import { Footer } from "./modules/footers/footer";
import { Hero } from "./modules/heros/hero";
import RootLayout from "./modules/layout";
import { Navbar } from "./modules/navbar/nav";
import { Offices } from "./modules/offices/office";
import { Quality } from "./modules/quality/rendimiento";
import { Calidad } from "./modules/responsability/calidad";
import { Services } from "./modules/servis/services";
import { ShippingCalculator } from "./modules/shipping-calculator/calculator";
import { SimpleSteps } from "./modules/simple-steps/simple";
import { SocialMedia } from "./modules/social/social-media";
import { Tracking } from "./modules/tracking/trackings";
import { WhatsAppButton } from "./modules/WhatsAppButton";

function App() {
  return (
    <RootLayout>
      <Navbar />
      <section id="hero" className="py-0">
        <Hero />
      </section>

      <section id="quiénes-somos" className="py-0">
        <AboutUs />
      </section>

      <section id="servicios" className="py-0">
        <Services />
      </section>

      <section id="seguimiento" className="py-0">
        <Tracking />
      </section>

      <section id="responsabilidad" className="py-0">
        <Calidad
          urls={
            "https://cdn.pixabay.com/photo/2019/11/05/07/47/port-4602965_1280.jpg"
          }
        />
      </section>

      <section id="pasos-simples" className="py-0">
        <SimpleSteps />
      </section>

      <section id="calculadora" className="py-0">
        <ShippingCalculator />
      </section>

      {/* <FeaturedImages /> */}

      <section id="calidad">
        <Quality
          url={
            "https://cdn.pixabay.com/photo/2023/01/03/07/26/logistics-7693789_1280.jpg"
          }
        />
      </section>

      <section id="oficinas" className="py-0">
        <Offices />
      </section>

      <WhatsAppButton phoneNumber="+51932183374" />
      <SocialMedia />
      <Footer
        url={
          "https://cdn.pixabay.com/photo/2022/12/29/00/41/cargo-ship-7683972_1280.jpg"
        }
      />
    </RootLayout>
  );
}

export default App;
