import { Toaster } from "react-hot-toast";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
    < div className="overflow-hidden ">
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Body></Body>
      <Footer></Footer>
    </div>

  )
}