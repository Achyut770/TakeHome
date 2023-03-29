import React, { useContext, useState } from "react";
import TicketContainerApi from "../../ContextApi/TicketContainerApi";
import { TicketData } from "../Tickets/Interface/TicketInterface";
import "./styles/AddTheTicket.css";
interface InputState extends TicketData {
  [key: string]: string | number;
}

const AddTheTicket = ({ setClose }: { setClose: () => void }) => {
  const [input, setInput] = useState<InputState>({
    ticketId: 0,
    agentCustomer: 0,
    walletId: 0,
    created: "",
    date: "",
    time: "",
    route: "",
    source: "",
    createdBy: "",
    project: "",
    subVertical: "",
    vertical: "",
    assignedTo: "",
    ticketStatus: "",
  });
  const value = useContext(TicketContainerApi);

  let dataInput = [
    {
      title: "Assigned By",
      name: "createdBy",
    },
    {
      title: "Customer",
      name: "agentCustomer",
    },
    {
      title: "Route",
      name: "route",
    },
    {
      title: "Source",
      name: "source",
    },
    {
      title: "Project",
      name: "project",
    },
    {
      title: "assignedTy",
      name: "assignedTo",
    },
    {
      title: "Vertical",
      name: "vertical",
    },
    {
      title: "Wallet",
      name: "wallet",
    },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // get the current date and time
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();

      // add the date and time to the input object
      let ticketContainer = localStorage.getItem("TicketContainer");
      let tickets: TicketData[] = [];
      let ticketId = 0;
      console.log(ticketContainer);

      let ticketCount = localStorage.getItem("TicketCount");
      if (ticketCount) {
        ticketId = Number(ticketCount) + 1;
      }

      localStorage.setItem("TicketCount", ticketId.toString());

      if (!ticketContainer) {
        ticketId = 0;
      } else {
        tickets = JSON.parse(ticketContainer);
      }

      const updatedInput = {
        ...input,
        date,
        time,
        ticketId,
      };

      // Add the new ticket to the array of tickets
      tickets.push(updatedInput);

      // Save the updated array of tickets to localStorage
      localStorage.setItem("TicketContainer", JSON.stringify(tickets));
      setClose();
      value?.fetchTicketContainer();
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="windowBackground" onClick={() => setClose()}></div>
      <div className="addTheTicketInputContainer">
        <div className="iconCross">
          <i className="fa-solid fa-xmark fa-2x" onClick={() => setClose()}></i>
        </div>
        <form onSubmit={handleSubmit} className="addToTicketForm">
          {dataInput.map(({ title, name }) => {
            return (
              <label key={name} className="addTheTicketLabel">
                <div>{title}</div>
                <input
                  className="addTheTicketInput"
                  required
                  name={name}
                  value={input[name]}
                  onChange={(e) =>
                    setInput({ ...input, [name]: e.target.value })
                  }
                />
              </label>
            );
          })}
          <div className="addToTextButtonContainer">
            <button className="buttonAddToText" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTheTicket;
