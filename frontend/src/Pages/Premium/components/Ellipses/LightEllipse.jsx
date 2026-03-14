const LightEllipse = ({ size, opacity }) => {
  return (
    <div
      className="rounded-circle"
      style={{
        width: size,
        height: size,
        background:
          `linear-gradient(133deg, rgba(67, 178, 240, ${opacity}) 28.43%, rgba(45, 92, 243, ${opacity}) 110.85%)`,
      }}
    />
  );
};

export default LightEllipse;
