import Hero from "./components/Hero";
import Movies from "./components/Movies/Movies";
import Navbar from "./Navbar/Navbar";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movies />
    </>
  );
}
