export const ImageCard = ({ image, className }) => {
  return (
    <div className={`flex-none w-[638px] h-[358px] ${className}`}>
      <img src={image} alt="Image" className="w-full h-full object-cover" />
    </div>
  );
};
