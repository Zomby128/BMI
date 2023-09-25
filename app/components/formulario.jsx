import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <form className="flex flex-col items-center space-y-3 border border-gray-300
        p-4">
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Estatura</label>
                <input type="text" placeholder='Estatura en cm' className='bg-red-200 p-2 rounded-md'></input>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='' className='uppercase font-bold' >Peso</label>
                <input type="text" placeholder='Peso en kg' className='bg-red-200 p-2 rounded-md'></input>
            </div>

            <div>
                <input type="button" value="Calcular BMI" className="bg-red-600 rounded-md cursor-pointer
                text-white uppercase
                font-semibold w-full" 
                />
            </div>


        </form>
    </div>
  )
}

export default Formulario;