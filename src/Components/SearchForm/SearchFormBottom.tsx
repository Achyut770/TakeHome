import React from "react";
import { exportToExcel } from "../../DownloadInExcelFile/DownloadinExcelFile";
import { FormProps } from "./Interface/FormsProps";
import { useNavigate } from "react-router-dom";

interface Bottom extends FormProps {
  fromTicket: boolean;
}

const SearchFoomBotytom = ({ input, handleChange, fromTicket }: Bottom) => {
  const navigate = useNavigate();

  const navigateToTicketAndDownloadExcel = () => {
    navigate("/tickets");
    setTimeout(() => {
      alert("Click the export ticket");
    }, 500);
  };

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
          <button type="submit"> {fromTicket ? "Search" : "Submit"} </button>
          <button type="reset" className="reset">
            {fromTicket ? "Clear" : "Reset"}
          </button>
          <div
            className="exportViewTickets"
            onClick={() =>
              fromTicket
                ? exportToExcel("my-table", "mydata")
                : navigateToTicketAndDownloadExcel()
            }
          >
            {fromTicket ? "Export Ticket" : "Export"}
          </div>
          {fromTicket ? null : (
            <div
              className="exportViewTickets"
              onClick={() => navigate("/tickets")}
            >
              View Tickets
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchFoomBotytom;
