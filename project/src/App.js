import "./App.css";
import { Mainroutes } from "./pages/Mainroutes";
import { Navbar } from "./components/Footer/Navbar"
import { Footer } from "./components/Footer/Footer";
import { Recept } from "./components/Checkappointment/Recept";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar/>
      <Mainroutes />
      <Footer />
      <Recept/>
    </div>
  );
}

export default App;
