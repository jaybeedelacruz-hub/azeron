export const FeedbackCard = ({ className, image, text }) => {
  return (
    <div className={`flex flex-col cursor-pointer mb-8 ${className}`}>
      <div>
        <img src={image} alt="" className={`w-12 rounded-full ${className}`} />
      </div>

      <div
        className={`flex items-center justify-center bg-gray-300 h-[55px] w-[730px] ml-20 ${className}`}
        style={{ boxShadow: '16px 10px 4px rgba(0, 0, 0, 0.8)' }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
