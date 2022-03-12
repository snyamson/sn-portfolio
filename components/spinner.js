/* eslint-disable @next/next/no-img-element */
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
      <img
        src="/assets/images/loader.gif"
        style={{ zIndex: 30000 }}
        alt="loader"
      />
    </div>
  );
};

export default Spinner;
