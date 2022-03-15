import React from "react";

export const Header = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  var date = new Date();

  return (
    <div className="Header">
      <h1>React ToDo Application</h1>
      <h2>
        {days[date.getDay() - 1]}, {months[date.getMonth()]}{" "}
        {date.getUTCDate() + " " + date.getFullYear()}
      </h2>
    </div>
  );
};
