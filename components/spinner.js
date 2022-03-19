/* eslint-disable @next/next/no-img-element */
import Pulse from "react-reveal/Pulse";
const Spinner = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(6,7,7,0.8)",
        zIndex: "30000",
      }}
    >
      <Pulse forever={true}>
        <img
          src="/assets/images/logos/logo-dark.svg"
          style={{ zIndex: 30000 }}
          alt="loader"
          height="45vh"
        />
      </Pulse>
    </div>
  );
};

export default Spinner;
