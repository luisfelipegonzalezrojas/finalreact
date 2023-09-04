import React, { useState } from "react";

const DateTimeButton = () => {
  const [dateTime, setDateTime] = useState(new Date());

  const handleClick = () => {
    setDateTime(new Date());
  };

  return (
    <button onClick={handleClick}>
      {dateTime.toLocaleString()}
    </button>
  );
};

export default DateTimeButton;