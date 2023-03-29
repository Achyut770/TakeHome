import React, { useState } from "react";
import { input } from "./Interface/FormsProps";
import MainDashBoardToMiddle from "./MainDashBoardToMiddle";
import MainDashboardTopBottom from "./MainDashboardTopBottom";
import MainDashboradTopTop from "./MainDashboradTopTop";

import "./styles/MainDashboardTops.css";

const MainDashboardTops = ({ fromTicket }: { fromTicket: boolean }) => {
  const [inputValue, setInput] = useState<input>({
    assignedBy: "",
    group: "",
    assignedTo: "",
    project: "",
    vertical: "",
    subVertical: "",
    from: Date(),
    to: Date(),
    totalTickets: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <div className="MainDashboardTop">
        <form onSubmit={handleSubmit}>
          <MainDashboradTopTop
            input={inputValue}
            setInput={setInput}
            handleChange={handleChange}
          />
          <MainDashBoardToMiddle
            setInput={setInput}
            input={inputValue}
            handleChange={handleChange}
          />
          <MainDashboardTopBottom
            input={inputValue}
            fromTicket={fromTicket}
            handleChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default MainDashboardTops;
