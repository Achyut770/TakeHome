import { ReactNode, useEffect, useState } from "react";
import { TicketData } from "../Components/Tickets/Interface/TicketInterface";
import TicketContainerApi from "../ContextApi/TicketContainerApi";

const TicketContainer = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<TicketData[]>([]);
  const fetchTicketContainer = () => {
    const ticketContainer = localStorage.getItem("TicketContainer");
    if (ticketContainer) {
      let ticketData = JSON.parse(ticketContainer);
      setTickets(ticketData);
      setSelectedTickets(ticketData);
      console.log(ticketData);
    }
  };

  const fetchSelectedTicket = (input: TicketData) => {
    let ticketArray: TicketData[] = [];
    tickets.map((items: TicketData) => {
      if (
        items.project.toLowerCase().includes(input.project.toLowerCase()) ||
        items.project.toLowerCase().includes(input.vertical.toLowerCase()) ||
        items.ticketStatus
          .toLowerCase()
          .includes(input.ticketStatus.toLowerCase()) ||
        items.agentCustomer
          .toString()
          .toLowerCase()
          .includes(input.agentCustomer.toString().toLowerCase())
      )
        ticketArray.push(items);
    });

    setSelectedTickets(ticketArray);
  };

  useEffect(() => {
    fetchTicketContainer();
  }, []);

  const value = {
    tickets,
    selectedTickets,
    fetchSelectedTicket,
    fetchTicketContainer,
  };
  return (
    <TicketContainerApi.Provider value={value}>
      {children}
    </TicketContainerApi.Provider>
  );
};

export default TicketContainer;
