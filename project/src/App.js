import "./App.css";
import { Mainroutes } from "./pages/Mainroutes";
import { Navbar } from "./components/Footer/Navbar"
import { Footer } from "./components/Footer/Footer";
import { Recept } from "./components/Checkappointment/Recept";
import { PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar/>
      <Mainroutes />
      <Footer />
      {/* <PDFDownloadLink document={<Recept/>} fileName="receipt">
        {({loading}) => (loading?<button>Loading document</button>:<button>Download</button>)}
      </PDFDownloadLink>
      <Recept/> */}
    </div>
  );
}

export default App;
