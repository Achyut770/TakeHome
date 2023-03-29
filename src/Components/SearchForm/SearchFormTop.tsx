import React from "react";
import { FormsPropsTopAndMiddle } from "./Interface/FormsProps";

const SearchFormTop = ({ input, handleChange }: FormsPropsTopAndMiddle) => {
  let AssiggnedTo = [
    "Ekghanti",
    "Sapna Sharma",
    "Anil Tharu",
    "Achyut Adhikari",
    "Ozone Maharjan",
  ];
  return (
    <>
      <div className="dashboardTop">
        <label>
          <div>Assigned By:</div>
          <input type="text" onChange={handleChange} placeholder="....." />
        </label>
        <label>
          <div>Group:</div>
          <input type="text" onChange={handleChange} placeholder="....." />
        </label>
        <label>
          <div>Assigned To:</div>
          <div className="assignedTo">
            {AssiggnedTo.map((items, index) => {
              return <div key={index}>{items}</div>;
            })}
          </div>
        </label>
      </div>
    </>
  );
};

export default SearchFormTop;
