import Image from 'next/image'
import Formulario from "./components/Formulario"

export default function Home() {
  return (
   <main className='flex flex-col items-center space-y-3 mb-20'>
    <section>
      <h1 className="font-bold text-3xl">Indice de Masa Corporal</h1>
    </section>
    <section className="w-[90%]"></section>
    <Formulario></Formulario>
   </main>
  )
}
