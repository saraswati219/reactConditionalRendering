import "./App.css";
import CondRend1 from "./CondRend1";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import CondRend2 from "./CondRend2.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <CondRend1 />
      <CondRend2 />
      <Footer />
    </>
  );
}

export default App;
