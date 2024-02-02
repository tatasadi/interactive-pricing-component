import React, { ReactNode } from "react"

interface ButtonProps {
  className?: string
  onClick?: () => void
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  ...props
}) => {
  return (
    <button
      className={`rounded-full bg-neutral-dark-desaturated-blue px-[2.88rem] py-3 text-xs font-extrabold leading-normal text-custom-pale-blue hover:text-white ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
