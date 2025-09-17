import type { Patient } from "../types"

type PatientsDetailProps = {
  patient: Patient
}

function PatientsDetail({patient} : PatientsDetailProps) {
  return (
    <div className="bg-zinc-900 p-6 rounded-xl">
      {patient.name}
    </div>
  )
}

export default PatientsDetail