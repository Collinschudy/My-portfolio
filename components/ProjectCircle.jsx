const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * (360);

  return (
    <div
      style={{
        background: `radial-gradient(white, 55%, transparent 56%),
            conic-gradient(rgb(255 237 213) 0deg ${angle}deg, rgb(194 65 12) ${angle}deg 360deg),
            red`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
