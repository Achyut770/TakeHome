import { ReactNode, useEffect, useState } from "react";
import { TicketData } from "../Components/Tickets/Interface/TicketInterface";
import TicketContainerApi from "../ContextApi/TicketContainerApi";
import { input } from "../Components/MainDashBoard/Interface/FormsProps";

const TicketContainer = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<TicketData[]>([]);
  const fetchTicketContainer = () => {
    const ticketContainer = localStorage.getItem("TicketContainer");
    if (ticketContainer) {
      let ticketData = JSON.parse(ticketContainer);
      setTickets(ticketData);
      setSelectedTickets(ticketData);
    }
  };

  const fetchSelectedTicket = (input: input) => {
    let ticketArray: TicketData[] = [];

    tickets.map((items: TicketData) => {
      if (
        items.project.toLowerCase().includes(input.project.toLowerCase()) &&
        items.project.toLowerCase().includes(input.vertical.toLowerCase()) &&
        items.agentCustomer
          .toString()
          .toLowerCase()
          .includes(input.customerNumber.toString().toLowerCase())
      ) {
        const from = new Date(input.from);
        const itemsDate = new Date(items.date);
        const to = new Date(input.to);
        if (input.from) {
          if (itemsDate < from) {
            return;
          }
        }
        if (input.to) {
          if (itemsDate > to) {
            return;
          }
        }

        ticketArray.push(items);
        console.log(items);
        return;
      }
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
