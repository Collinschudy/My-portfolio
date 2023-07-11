import skillsData from "./skillsdsata";

const ProgressCircle = (
  { progress = "0.75", size = "40", percent },
  hidden
) => {
  const angle = progress * 360;

  return (
    <div
      className={`${hidden ? "hidden" : ""} sm:block`}
      style={{
        background: `radial-gradient(#eeeeee, 55%, transparent 56%),
            conic-gradient(#cfd8dc 0deg ${angle}deg, #ffab91 ${angle}deg 360deg),
            red`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
      

  );
};

export default ProgressCircle;


// #fff3e0
// #ff5722