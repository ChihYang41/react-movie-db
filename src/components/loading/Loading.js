import React from "react";
import { Spin } from "antd";

function Loading() {
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        right: "0",
        bottom: "0",
        position: 'absolute',
        zIndex: "10",
      }}
    >
      <Spin size="large"/>
    </div>
  );
}

export default Loading;