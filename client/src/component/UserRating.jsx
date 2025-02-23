export const UserRating = ({
  text,
  className,
  image1,
  image2,
  image3,
  image4,
  image5,
}) => {
  return (
    <div className={`flex mb-6 items-center ml-6 ${className}`}>
      <p className={`text-2xl font-semibold ${className}`}>{text}</p>
      <img src={image1} alt="" className={`w-6 h-6 mx-2 ${className}`} />
      <img src={image2} alt="" className={`w-6 h-6 mx-2 ${className}`} />
      <img src={image3} alt="" className={`w-6 h-6 mx-2 ${className}`} />
      <img src={image4} alt="" className={`w-6 h-6 mx-2 ${className}`} />
      <img src={image5} alt="" className={`w-6 h-6 mx-2 ${className}`} />
    </div>
  );
};
