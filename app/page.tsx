import Image from "next/image";

import Link from "next/link";
import Navbar from "../components/ui/navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between bg-black"></main>
    </>
  );
}
