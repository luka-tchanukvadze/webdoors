import React from "react";
import { Link } from "react-router-dom";

function Something() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        marginTop: "20%",
        gap: "2rem",
        alignItems: "center",
        flex: "1",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "3rem" }}>Loading ...</div>
      <Link style={{ fontSize: "3rem" }} to="..">
        Go back
      </Link>
    </div>
  );
}

export default Something;
