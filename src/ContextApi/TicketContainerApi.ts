import { createContext } from "react";
import { TicketData } from "../Components/Tickets/Interface/TicketInterface";

export interface TicketContainerApiInterface {
  tickets: TicketData[];
  fetchTicketContainer: () => void;
  selectedTickets: TicketData[];
  fetchSelectedTicket: (inpur: TicketData) => void;
}

const TicketContainerApi = createContext<TicketContainerApiInterface | null>(
  null
);

export default TicketContainerApi;
