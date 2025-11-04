import React from "react";

const ProfileCard = ({ avatar, name, job, hobby }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        width: "240px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ margin: "8px 0", fontSize: "18px" }}>{name}</h2>
      <p style={{ color: "#555", margin: "4px 0" }}>{job}</p>
      <p style={{ color: "#888", fontStyle: "italic" }}>Хобби: {hobby}</p>
    </div>
  );
};

export default ProfileCard;
