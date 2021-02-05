import React from "react";

const Image = ({ ratio, src }) => {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%"
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt="card pic" style={{ height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
