import "./App.css";
import { Mainroutes } from "./pages/Mainroutes";
import { Navbar } from "./components/Footer/Navbar"
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar/>
      <Mainroutes />
      <Footer />
    </div>
  );
}

export default App;
