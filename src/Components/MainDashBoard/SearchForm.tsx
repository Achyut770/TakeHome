import React, { useContext, useState } from "react";
import { input } from "./Interface/FormsProps";
import SearchFormMiddle from "./SearchFormMiddle";
import SearchFormBottom from "./SearchFormBottom";
import SearchFormTop from "./SearchFormTop";
import "./styles/SearchForm.css";
import TicketContainerApi from "../../ContextApi/TicketContainerApi";

const SearchForm = ({ fromTicket }: { fromTicket: boolean }) => {
  const [inputValue, setInput] = useState<input>({
    createdBy: "",
    group: "",
    assignedTo: "",
    project: "",
    vertical: "",
    subVertical: "",
    from: "",
    to: "",
    customerNumber: "",
  });

  const value = useContext(TicketContainerApi);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev: input) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    value?.fetchSelectedTicket(inputValue);
  };

  return (
    <>
      <div className="MainDashboardTop">
        <form onSubmit={handleSubmit}>
          <SearchFormTop
            input={inputValue}
            setInput={setInput}
            handleChange={handleChange}
          />
          <SearchFormMiddle
            setInput={setInput}
            input={inputValue}
            handleChange={handleChange}
          />
          <SearchFormBottom
            input={inputValue}
            fromTicket={fromTicket}
            handleChange={handleChange}
          />
        </form>
      </div>
    </>
  );
};

export default SearchForm;
