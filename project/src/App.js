import "./App.css";
import { Mainroutes } from "./pages/Mainroutes";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainroutes />
    </div>
  );
}

export default App;
