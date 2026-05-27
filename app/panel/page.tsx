import Image from "next/image";
import Link from "next/link";

export default function Panel() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Image src="/logo-imcyc.svg" alt="Logo" width={300} height={100} className="mb-4" />
      <p>Instituto Mexicano del Cemento y del Concreto A.C.</p>
      <h1 className="text-4xl font-bold">MODELO ESTADÍSTICO</h1>
      <h3 className="text-lg font-bold">PLANTAS DE CONCRETO</h3>
    </div>
  );
}
