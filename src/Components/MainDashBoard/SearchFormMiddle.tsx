import React from "react";
import { FormsPropsTopAndMiddle } from "./Interface/FormsProps";
export const projectArray = [
  "KYC Update",
  "Drop Call",
  "Other",
  "Customer Onboard",
];
const SearchFormMiddle = ({
  input,
  handleChange,
  setInput,
}: FormsPropsTopAndMiddle) => {
  const [projectData, setProjectData] = React.useState<string[]>(projectArray);
  const [showProject, setShowProject] = React.useState(false);
  const [projectValue, setProjectValue] = React.useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let array: string[] = [];
    projectData.map((items, index) => {
      if (items.toLowerCase().includes(e.target.value.toLowerCase())) {
        array.push(items);
      }
    });
    setProjectData(array);
  };

  const setProject = (items: string) => {
    setInput((prev) => {
      return {
        ...prev,
        project: items,
      };
    });
    setProjectValue(() => items);
  };
  return (
    <>
      <div className="dashboardTop">
        <label>
          <div>Project:</div>
          <input
            type="text"
            onChange={handleInputChange}
            onClick={() => setShowProject((prev) => !prev)}
            name="project"
            value={projectValue}
            placeholder="Select Project"
          />
          {showProject ? (
            <div>
              {projectData.map((items, index) => {
                return (
                  <div onClick={() => setProject(items)} key={index}>
                    {items}
                  </div>
                );
              })}
            </div>
          ) : null}
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

export default SearchFormMiddle;
