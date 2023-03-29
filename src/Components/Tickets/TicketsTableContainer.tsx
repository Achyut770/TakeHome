import React, { useContext, useEffect, useState } from "react";
import TicketContainerApi from "../../ContextApi/TicketContainerApi";
import "./styles/TicketTableContainer.css";
import AddTheTicket from "../AddTheTicket/AddTheTicket";
import { TicketData } from "./Interface/TicketInterface";

const TicketsTableContainer = () => {
  const value = useContext(TicketContainerApi);
  const [data, setData] = useState<TicketData[] | undefined>([]);
  const [deleteShow, setDeleteShow] = React.useState(false);
  const [editShow, setEditShow] = React.useState(false);
  const [sendEmail, setSendEmail] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  const [emailAddress, setEmainAddress] = React.useState("");
  useEffect(() => {
    setData(value?.selectedTickets);
  }, [value?.selectedTickets]);
  if (!data) {
    return <div>Loading</div>;
  }

  const deleteTicket = () => {
    const updatedTickets: TicketData[] = [];

    data.map((items) => {
      if (items.ticketId !== selectedId) {
        updatedTickets.push(items);
      }
    });

    localStorage.setItem("TicketContainer", JSON.stringify(updatedTickets));
    value?.fetchTicketContainer();
    setDeleteShow(() => false);
  };

  const hideOrShowTheData = (index: number, hideNumber: number) => {
    try {
      data[index].hide = hideNumber;
      console.log(data[index]);
      localStorage.setItem("TicketContainer", JSON.stringify(data));
      value?.fetchTicketContainer();
    } catch (error) {
      alert("Some Thing Went Wrong");
    }
  };

  const handleSendClick = (e: React.FormEvent) => {
    const stringRow = JSON.stringify(data[selectedId]);
    const emailBody = `Here is the data for the selected row: ${stringRow}`;

    window.location.href = `mailto:${emailAddress}?subject=Table%20Row%20Data&body=${emailBody}`;
  };

  return (
    <div className="tableContainer">
      {deleteShow ? (
        <>
          <div
            className="windowBackground"
            onClick={() => setDeleteShow(() => false)}></div>
          <div className="addTheTicketInputContainer DeleteContainer">
            <div className="areYouSure">Are You Sure?</div>
            <div className="yesNo">
              <div className="yesAndNo" onClick={() => deleteTicket()}>
                YES
              </div>
              <div
                className="yesAndNo"
                onClick={() => setDeleteShow(() => false)}>
                NO
              </div>
            </div>
          </div>
        </>
      ) : null}
      {editShow ? (
        <AddTheTicket
          setClose={() => setEditShow(() => false)}
          fromEdit={true}
          ticketIndex={selectedId}
        />
      ) : null}
      {sendEmail ? (
        <div>
          <div
            className="windowBackground"
            onClick={() => setSendEmail(() => false)}></div>
          <div className="emailAddress">
            <div>Enter The Email Addreess:</div>
            <form onSubmit={handleSendClick}>
              <input
                type="email"
                onChange={(e) => setEmainAddress(e.target.value)}
              />
            </form>
          </div>
        </div>
      ) : null}
      <table id="my-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Agent / Customer</th>
            <th>Wallet ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Route</th>
            <th>Source</th>
            <th>Created By</th>
            <th>Project</th>
            <th>Vertical</th>
            <th>Sub-Vertical</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr key={row.ticketId}>
                <td>{row.hide ? "--" : row.ticketId}</td>
                <td>{row.hide ? "--" : row.agentCustomer}</td>
                <td>{row.hide ? "--" : row.walletId}</td>
                <td>{row.hide ? "--" : row.date}</td>
                <td>{row.hide ? "--" : row.time}</td>
                <td>{row.hide ? "--" : row.route}</td>
                <td>{row.hide ? "--" : row.source}</td>
                <td>{row.hide ? "--" : row.createdBy}</td>
                <td>{row.hide ? "--" : row.vertical}</td>
                <td>{row.hide ? "--" : row.project}</td>
                <td className="subVertical">
                  <span>
                    <i
                      className={
                        row.hide
                          ? "fa-sharp fa-solid fa-eye-low-vision"
                          : "fa-solid  fa-eye"
                      }
                      onClick={() =>
                        row.hide
                          ? hideOrShowTheData(index, 0)
                          : hideOrShowTheData(index, 1)
                      }></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-pen-to-square"
                      onClick={() => {
                        {
                          setSelectedId(() => index);

                          setEditShow(() => true);
                        }
                      }}></i>
                  </span>
                  <span
                    onClick={() => {
                      setDeleteShow(() => true);
                      setSelectedId(() => row.ticketId);
                    }}>
                    <i className="fa-sharp trash fa-solid fa-trash"></i>
                  </span>
                  <span>
                    <i
                      className="fa-solid fa-paper-plane"
                      onClick={() => {
                        setSelectedId(() => index);

                        setSendEmail(() => true);
                      }}></i>
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr className="noTickets">
              <td colSpan={11}>No Tickets Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TicketsTableContainer;
