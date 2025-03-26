import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Features } from "./components/Features";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <Features />
    <Footer />
  </>
);
