import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Gallery />
    <Features />
    <Footer />
  </>
);
