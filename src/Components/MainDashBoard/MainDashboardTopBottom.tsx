import React from "react";
import { FormProps } from "./Interface/FormsProps";

const MainDashboardTopBottom = ({ input, handleChange }: FormProps) => {
  return (
    <>
      <div className="dashboardTop">
        <label>
          <div>From:</div>
          <input
            className="dateStatus"
            type="date"
            onChange={handleChange}
            name="from"
            value={input.from}
          />
        </label>
        <label>
          <div>To:</div>
          <input
            className="dateStatus"
            type="date"
            onChange={handleChange}
            value={input.to}
            name="to"
          />
        </label>
        <label>
          <div>Ticket Status:</div>
          <input
            className="dateStatus"
            type="text"
            onChange={handleChange}
            value={input.to}
            name="to"
          />
        </label>
        <div className="bottonContainer">
          <button type="submit"> Submit </button>
          <button type="reset" className="reset">
            Reset
          </button>
          <button>Export</button>
          <button>View Tickets</button>
        </div>
      </div>
    </>
  );
};

export default MainDashboardTopBottom;
