import { ReactNode } from "react"

type ErrorMessageProps = {
  children: ReactNode
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <>
      <div>
        { children }
      </div>
    </>
  )
}

export { ErrorMessage }
