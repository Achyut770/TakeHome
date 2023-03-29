import React, { useState } from "react";
import AddTheTicket from "../Components/AddTheTicket/AddTheTicket";
import TicketsTableContainer from "../Components/Tickets/TicketsTableContainer";
import SearchForm from "../Components/MainDashBoard/SearchForm";

const Tickets = () => {
  const [addTicketShow, setAddTicketShow] = useState(false);

  const showHideAddTicket = (showHide: boolean) => {
    setAddTicketShow(() => showHide);
  };

  return (
    <>
      {addTicketShow ? (
        <AddTheTicket
          setClose={() => showHideAddTicket(false)}
          fromEdit={false}
        />
      ) : null}
      <div className="addTheTicketContainer">
        <div className="addTheTicket" onClick={() => showHideAddTicket(true)}>
          Add The Ticket{" "}
        </div>
      </div>{" "}
      <SearchForm fromTicket={true} />
      <TicketsTableContainer />
    </>
  );
};

export default Tickets;
