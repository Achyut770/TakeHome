import React, { useContext, useEffect, useState } from "react";
import TicketContainerApi from "../../ContextApi/TicketContainerApi";
import "./styles/TicketTableContainer.css";

interface TicketData {
  ticketId: number;
  agentCustomer: number;
  walletId: number;
  created: string;
  date: string;
  time: string;
  route: string;
  source: string;
  createdBy: string;
  project: string;
  subVertical: string;
}

let Data: TicketData[] = [
  {
    ticketId: 0,
    agentCustomer: 9817589348,
    walletId: 9817589348,
    created: "2078-12-16ajksgdajskjhdgassd",
    date: "2075-12-16",
    time: "2:00pm",
    route: "manual",
    source: "None",
    createdBy: "Achyut Adhikari",
    project: "Drop Call",
    subVertical: "",
  },
  {
    ticketId: 1,
    agentCustomer: 9817589349,
    walletId: 9817589349,
    created: "2078-12-17asdasdasdasdasd",
    date: "2075-12-17",
    time: "3:00pm",
    route: "email",
    source: "Customer",
    createdBy: "John Doe",
    project: "Billing Issue",
    subVertical: "Finance",
  },
  {
    ticketId: 2,
    agentCustomer: 9817589350,
    walletId: 9817589350,
    created: "2078-12-18asdvhjbnakhjsgdjhgashjd",
    date: "2075-12-18",
    time: "4:00pm",
    route: "phone",
    source: "None",
    createdBy: "Jane Smith",
    project: "Account Setup",
    subVertical: "Tech",
  },
];

const TicketsTableContainer = () => {
  const value = useContext(TicketContainerApi);
  console.log(value);
  const [data, setData] = useState<TicketData[] | undefined>([]);
  const [deleteShow, setDeleteShow] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  useEffect(() => {
    setData(value?.selectedTickets);
  }, [value?.selectedTickets]);
  if (!data) {
    return <div>Loading</div>;
  }

  const deleteTicket = () => {
    const updatedTickets: TicketData[] = [];

    data.map((items, index) => {
      if (items.ticketId != selectedId) {
        updatedTickets.push(items);
      }
    });
    console.log(updatedTickets);

    localStorage.setItem("TicketContainer", JSON.stringify(updatedTickets));
    value?.fetchTicketContainer();
    setDeleteShow(() => false);
  };

  return (
    <div className="tableContainer">
      {deleteShow ? (
        <>
          <div
            className="windowBackground"
            onClick={() => setDeleteShow(() => false)}
          ></div>
          <div className="addTheTicketInputContainer DeleteContainer">
            <div className="areYouSure">Are You Sure?</div>
            <div className="yesNo">
              <div className="yesAndNo" onClick={() => deleteTicket()}>
                YES
              </div>
              <div
                className="yesAndNo"
                onClick={() => setDeleteShow(() => false)}
              >
                NO
              </div>
            </div>
          </div>
        </>
      ) : null}
      <table id="my-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Agent / Customer</th>
            <th>Wallet ID</th>
            <th className="created">Created</th>
            <th>Date</th>
            <th>Time</th>
            <th>Route</th>
            <th>Source</th>
            <th>Created By</th>
            <th>Project</th>
            <th>Sub-Vertical</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.ticketId}>
              <td>{row.ticketId}</td>
              <td>{row.agentCustomer}</td>
              <td>{row.walletId}</td>
              <td className="Created">{row.created}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.route}</td>
              <td>{row.source}</td>
              <td>{row.createdBy}</td>
              <td>{row.project}</td>
              <td className="subVertical">
                <span>
                  <i className="fa-solid  fa-eye"></i>
                </span>
                <span>
                  <i className="fa-solid fa-pen-to-square"></i>
                </span>
                <span
                  onClick={() => {
                    setDeleteShow(() => true);
                    setSelectedId(() => row.ticketId);
                  }}
                >
                  <i className="fa-sharp trash fa-solid fa-trash"></i>
                </span>
                <span>
                  <i className="fa-solid fa-paper-plane"></i>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TicketsTableContainer;
