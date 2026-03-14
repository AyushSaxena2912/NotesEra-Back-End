const BrightEllipse = ({ size, opacity }) => {
  return (
    <div
      className="rounded-circle"
      style={{
        width: size,
        height: size,
        background:
          `linear-gradient(133deg, rgba(67, 178, 240, ${opacity}) 37.68%, rgba(45, 92, 243, ${opacity}) 120.1%)`,
      }}
    />
  );
};

export default BrightEllipse;
