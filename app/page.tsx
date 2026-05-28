import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black bg-slate-950 text-white">
      <Image src="/logo-imcyc.svg" alt="Logo" width={300} height={100} className="mb-4" />
      <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <h1 className="text-4xl font-bold">MODELO ESTADÍSTICO</h1>
      <h3 className="text-lg font-bold">PLANTAS DE CONCRETO</h3>
      <Link href="/panel" className="bg-gray-900 text-white px-10 py-2 rounded-md mt-5">INGRESAR</Link>
    </div>
  );
}
