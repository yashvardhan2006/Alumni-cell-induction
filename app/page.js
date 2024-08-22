import Image from "next/image";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="max-w-[100vw]">

    <Navbar/>
    <Main/>
    <Footer/>
    </div>
  );
}
