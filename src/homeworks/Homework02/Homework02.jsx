import React from "react";
import ProfileCard from "../../components/ProfileCard";

const Homework02 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "24px",
        flexWrap: "wrap",
        marginTop: "40px",
      }}
    >
      <ProfileCard
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        name="Алексей Смирнов"
        job="Frontend-разработчик"
        hobby="Путешествия"
      />
      <ProfileCard
        avatar="https://randomuser.me/api/portraits/women/12.jpg"
        name="Мария Кузнецова"
        job="UI/UX дизайнер"
        hobby="Рисование"
      />
      <ProfileCard
        avatar="https://randomuser.me/api/portraits/men/55.jpg"
        name="Иван Петров"
        job="QA-инженер"
        hobby="Велоспорт"
      />
    </div>
  );
};

export default Homework02;
