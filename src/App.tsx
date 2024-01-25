import FAQ from "./components/landing/FAQ";
import Features from "./components/landing/Features";
import Footer from "./components/landing/Footer";
import Header from "./components/landing/Header";
import Pricing from "./components/landing/Pricing";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <main>
          <Header />
          <Features />
          <Pricing />
          <FAQ />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
