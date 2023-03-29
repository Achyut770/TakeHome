import React, { useState } from "react";
import AddTheTicket from "../Components/AddTheTicket/AddTheTicket";
import MainDashboardTops from "../Components/MainDashBoard/MainDashboardTops";
import TicketsTableContainer from "../Components/Tickets/TicketsTableContainer";

const Tickets = () => {
  const [addTicketShow, setAddTicketShow] = useState(false);

  const showHideAddTicket = (showHide: boolean) => {
    setAddTicketShow(() => showHide);
  };

  return (
    <>
      {addTicketShow ? (
        <AddTheTicket setClose={() => showHideAddTicket(false)} />
      ) : null}
      <div className="addTheTicketContainer">
        <div className="addTheTicket" onClick={() => showHideAddTicket(true)}>
          Add The Ticket{" "}
        </div>
      </div>{" "}
      <MainDashboardTops fromTicket={true} />
      <TicketsTableContainer />
    </>
  );
};

export default Tickets;
