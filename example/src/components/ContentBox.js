import React from "react";

const ContentBox = () => {
  const loopBox = () => {
    let divStore = [];
    for (let c = 0; c < 20; c++) {
      divStore.push(
        <div
          key={c}
          style={{
            width: "14%",
            height: "50px",
            background: "aqua",
            margin: "5px"
          }}
        ></div>
      );
    }

    return divStore;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "400px",
        width: "100%",
        overflowY: "scroll"
      }}
    >
      {loopBox()}
    </div>
  );
};

export default ContentBox;
