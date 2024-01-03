import Image from "next/image";
import Hero from "./components/Hero";
import PortoCard from "./components/PortoCard";

export default function Home() {
  return (
    <div>
      <Hero />
      <PortoCard />
    </div>
  );
}
