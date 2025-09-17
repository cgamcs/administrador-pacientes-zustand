import { useForm } from "react-hook-form"
import Error from "./Error"
import type { DraftPatient } from "../types"
import { usePatientStore } from "../store"

export default function PatientForm() {
  const { addPatient } = usePatientStore()
  const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>()

  const registerPatient = (data : DraftPatient) => {
    addPatient(data)
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-zinc-900 shadow-md rounded-xl py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="flex justify-between mb-2 text-sm uppercase font-bold">
            Paciente

            {errors.name && (
              <Error>{errors.name?.message}</Error>
            )}
          </label>
          <input
            id="name"
            className="w-full p-3 bg-[#383939] rounded-lg"
            type="text"
            placeholder="Nombre del Paciente"
            {...register('name', {
              required: 'El nombre del paciente es obligatorio'
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="flex justify-between mb-2 text-sm uppercase font-bold">
            Propietario

            {errors.name && (
              <Error>{errors.name?.message}</Error>
            )}
          </label>
          <input
            id="caretaker"
            className="w-full p-3 bg-[#383939] rounded-lg"
            type="text"
            placeholder="Nombre del Propietario"
            {...register('caretaker', {
              required: 'El nombre del dueño es obligatorio'
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="flex justify-between mb-2 text-sm uppercase font-bold">
            Email

            {errors.email && (
              <Error>{errors.email?.message}</Error>
            )}
          </label>
          <input
            id="email"
            className="w-full p-3 bg-[#383939] rounded-lg"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email no válido'
              }
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="flex justify-between mb-2 text-sm uppercase font-bold">
            Fecha Alta

            {errors.date && (
              <Error>{errors.date?.message}</Error>
            )}
          </label>
          <input
            id="date"
            className="w-full p-3 bg-[#383939] rounded-lg"
            type="date"
            {...register('date', {
              required: 'La fecha de alta es obligatoria'
            })}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="flex justify-between mb-2 text-sm uppercase font-bold">
            Síntomas

            {errors.symptoms && (
              <Error>{errors.symptoms?.message}</Error>
            )}
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 bg-[#383939] rounded-lg"
            placeholder="Síntomas del paciente"
            {...register('symptoms', {
              required: 'Describir los síntomas es obligatorio'
            })}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 rounded-lg text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value='Guardar Paciente'
        />
      </form>
    </div>
  )
}