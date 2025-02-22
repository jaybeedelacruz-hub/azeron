export const Button = ({ children, icon, className, ...props }) => {
  return (
    <button
      className={`${className} bg-white text-black border-2 rounded px-2 py-1 drop-shadow-xl cursor-pointer`}
      {...props}
    >
      {icon ? <img src={icon} className="w-6"></img> : children}
    </button>
  );
};
