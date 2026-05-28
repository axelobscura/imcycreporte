"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


export default function Panel() {
  const [variables, setVariables] = useState<{ id: number, name: string, value: number | string}[]>([]);
  const valorx = variables.reduce((acc, v) => acc + Number(v.value), 0);
  const valorO = variables.length > 0 ? valorx / variables.length : 0;
  const sumMaxos = variables.reduce((acc, v) => {
    const diff = Number(v.value) - valorO;
    return acc + diff * diff;
  }, 0);
  const desviacion =
    variables.length > 1 ? Math.sqrt(sumMaxos / (variables.length - 1)) : 0;

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
        <h2 className="text-2xl font-bold mb-5"><FaRegArrowAltCircleRight className="inline-block mr-2" /> Ingresar los valores correspondientes a las muestras de la planta</h2>
        <p className="mb-4 text-xl font-bold">{valorx > 0 ? 'Suma de valores: ' + valorx : 'Por favor Ingrese los valores: '}</p>
        <div className="grid grid-cols-1">
          <div className="flex flex-col">
            {variables.map((variable) => (
              <div key={variable.id} className="flex flex-col gap-2 my-1">
                <label htmlFor={variable.id.toString()} className="text-lg font-bold">{variable.name}:</label>
                <input type="number" id={variable.id.toString()} placeholder={variable.name} value={variable.value} onChange={(e) => setVariables(variables.map(v => v.id === variable.id ? { ...v, value: Number(e.target.value) } : v))} className="bg-gray-800 text-white px-4 py-2" />
              </div>
            ))}
          </div>
          {/* buttons to add and remove variables */}
          <div className="flex flex-row gap-2 w-full my-3">
            {/* add variable button */}
              <button className="bg-green-900 text-white px-4 py-2 uppercase" onClick={() => setVariables([...variables, { id: variables.length + 1, name: `Valor ${variables.length + 1}`, value: '' }])}>Agregar valor</button>
            {variables.length > 0 && (
              <button className="bg-red-900 text-white px-4 py-2 uppercase" onClick={() => setVariables(variables.slice(0, -1))}>Eliminar valor</button>
            )}
            
          </div>
        </div>
        <div>
          {valorx > 0 && (
            <>
              <p>Muestras (n): {variables.length}</p>
              <p>Promedio (X): {Math.round(valorO)}</p>
              <p>Desviación estándar (S): {Math.round(desviacion)}</p>
              <p>fc de venta: 250</p>
              <p>Frecuencia de muestreo: {Math.round(1000 / variables.length)}</p>
              <p>Sobre Consumo (SC): {Math.round(valorO - 250)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
