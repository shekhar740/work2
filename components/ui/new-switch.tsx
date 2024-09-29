"use client";
interface ToggleButtonProps {
  handleClick: () => void; // Click handler to be passed by parent
  isChecked: boolean;      // Parent-controlled state (check/uncheck)
}

export const ToggleButton = ({ handleClick, isChecked }: ToggleButtonProps) => {
  return (
    <div
      className="relative bg-[#A5AECB] rounded-md w-16 h-6 cursor-pointer"
      onClick={handleClick} // Call parent's handler on click
    >
      <div
        className={`absolute top-1 rounded-full transition-all ease-in-out ${
          isChecked ? "right-1" : "left-1"
        } duration-300 w-4 h-4 bg-blue-500`}
      ></div>
    </div>
  );
};
