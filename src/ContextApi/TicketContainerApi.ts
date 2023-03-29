import { createContext } from "react";
import { TicketData } from "../Components/Tickets/Interface/TicketInterface";
import { input } from "../Components/MainDashBoard/Interface/FormsProps";

export interface TicketContainerApiInterface {
  tickets: TicketData[];
  fetchTicketContainer: () => void;
  selectedTickets: TicketData[];
  fetchSelectedTicket: (inpur: input) => void;
}

const TicketContainerApi = createContext<TicketContainerApiInterface | null>(
  null
);

export default TicketContainerApi;
