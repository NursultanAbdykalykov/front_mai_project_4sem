import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import { Header } from "./components/Header";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
  </>
);
