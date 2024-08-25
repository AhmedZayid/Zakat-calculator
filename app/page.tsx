import HomePage from "@/Components/Home";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between px-15 py-12 lg:p-24">
      <Navbar />
      <HomePage />
    </main>
  );
}
