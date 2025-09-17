import PatientForm from "./components/PatientForm"
import PatientList from "./components/PatientList"

function App() {

  return (
    <>
      <main className="container mx-auto my-10">
        <h1 className="font-black text-4xl text-center md:w-1/2 md:mx-auto">
          Seguimiento de Pacientes {' '}
          <span className="text-indigo-500">Veterinario</span>
        </h1>

        <div className="flex flex-col md:flex-row mt-10">
          <PatientForm />
          <PatientList />
        </div>
      </main>
    </>
  )
}

export default App
