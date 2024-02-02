const Toggle = ({
  isOn,
  onToggle,
}: {
  isOn: boolean
  onToggle: () => void
}) => {
  return (
    <div
      className={`relative h-[1.375rem] w-[2.6875rem] cursor-pointer rounded-full hover:bg-custom-soft-cyan ${
        isOn ? "bg-custom-strong-cyan-2" : "bg-custom-pale-blue"
      }`}
      onClick={onToggle}
    >
      <div
        className={`absolute top-[.2rem] h-4 w-4 rounded-full bg-white ${
          isOn ? "right-[.2rem]" : "left-[.2rem]"
        }`}
      ></div>
    </div>
  )
}

export default Toggle
