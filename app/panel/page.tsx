"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Panel() {
  const [variables, setVariables] = useState<{ id: number, name: string, value: number | string}[]>([]);
  const valorx = variables.reduce((acc, v) => acc + Number(v.value), 0);

  console.log(variables);
  return (
    <div className="grid grid-cols-[1fr_2fr] min-h-screen bg-zinc-50 font-sans dark:bg-black text-white">
      <div className="flex flex-col items-center justify-center p-5 bg-slate-900">
        <Link href="/">
          <Image src="/logo-imcyc.svg" alt="Logo" width={200} height={100} className="mb-2" />
        </Link>
        <p className="text-center text-sm text-white">Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <h1 className="text-2xl font-bold text-center text-white">MODELO ESTADÍSTICO</h1>
        <h3 className="text-sm font-bold text-center text-white">PLANTAS DE CONCRETO</h3>
      </div>
      <div className="bg-slate-700 p-5">
        <h2 className="text-2xl font-bold mb-5">Ingresar los valores correspondientes a la mezcla de concreto</h2>
        <p className="mb-4">Suma de variables: {valorx}</p>
        <div className="grid grid-cols-1">
          <div className="flex flex-col">
            {variables.map((variable) => (
              <div key={variable.id}>
                <label htmlFor={variable.id.toString()}>{variable.name}</label>
                <input type="number" id={variable.id.toString()} placeholder={variable.name} value={variable.value} onChange={(e) => setVariables(variables.map(v => v.id === variable.id ? { ...v, value: Number(e.target.value) } : v))} />
              </div>
            ))}
          </div>
          {/* buttons to add and remove variables */}
          <div className="flex flex-row gap-2">
            {variables.length > 0 && (
              <button className="bg-gray-900 text-white px-4 py-2 rounded-md" onClick={() => setVariables(variables.slice(0, -1))}>Remover variable</button>
            )}
            {/* add variable button */}
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md" onClick={() => setVariables([...variables, { id: variables.length + 1, name: `Variable ${variables.length + 1}`, value: '' }])}>Agregar variable</button>
          </div>
        </div>
        <div>
          {valorx > 0 && (
            <p>El valor de x es: {valorx / variables.length}</p>
          )}
          {valorx <= 0 && (
            <p>El valor de x es: 0</p>
          )}
        </div>
      </div>
    </div>
  );
}
