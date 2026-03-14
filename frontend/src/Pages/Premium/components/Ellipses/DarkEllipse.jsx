const DarkEllipse = ({ size, opacity }) => {
  return (
    <div
      className="rounded-circle"
      style={{
        width: size,
        height: size,
        background:
          `linear-gradient(133deg, rgba(47, 129, 174, ${opacity}) 14.98%, rgba(91, 97, 216, ${opacity}) 35.85%, rgba(84, 49, 193, ${opacity}) 97.41%)`,
      }}
    />
  );
};

export default DarkEllipse;
