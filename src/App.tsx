import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Work } from "./components/Work";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { useSettled } from "./useSettled";

export default function App() {
  useSettled();
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
