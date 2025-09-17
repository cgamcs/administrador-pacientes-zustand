import type { ReactNode } from "react"

function Error({children} : {children: ReactNode}) {
  return (
    <div className="text-red-500 font-semibold normal-case rounded-lg text-sm">
      {children}
    </div>
  )
}

export default Error