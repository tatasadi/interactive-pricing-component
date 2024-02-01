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
      className={`bg-neutral-dark-desaturated-blue text-custom-pale-blue rounded-full px-[2.88rem] py-3 text-xs font-extrabold leading-normal ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
