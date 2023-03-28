import React from "react";
import { FormsPropsTopAndMiddle } from "./Interface/FormsProps";

const MainDashBoardToMiddle = ({
  input,
  handleChange,
  setInput,
}: FormsPropsTopAndMiddle) => {
  return (
    <>
      <div className="dashboardTop">
        <label>
          <div>Project:</div>
          <input
            type="text"
            onChange={handleChange}
            value={input.project}
            name="project"
            placeholder="Select Project"
          />
        </label>
        <label>
          <div>Vertical:</div>
          <input
            type="text"
            onChange={handleChange}
            value={input.vertical}
            name="vertical"
            placeholder="Loading... Vertical"
          />
        </label>
        <label>
          <div>Sub-Vertical:</div>
          <input
            type="text"
            onChange={handleChange}
            value={input.subVertical}
            name="subVertical"
            placeholder="Loading... Sub Vertical"
          />
        </label>
      </div>
    </>
  );
};

export default MainDashBoardToMiddle;
