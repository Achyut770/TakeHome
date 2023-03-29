import React, { useContext, useEffect, useState } from "react";
import TicketContainerApi from "../../ContextApi/TicketContainerApi";
import { TicketData } from "../Tickets/Interface/TicketInterface";
import "./styles/AddTheTicket.css";
import { projectArray } from "../SearchForm/SearchFormMiddle";
interface InputState extends TicketData {
  [key: string]: string | number | undefined;
}

const AddTheTicket = ({
  setClose,
  fromEdit,
  ticketIndex,
}: {
  setClose: () => void;
  fromEdit: boolean;
  ticketIndex?: number;
}) => {
  const [showProject, setShowProject] = React.useState(false);
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
      title: "Assigned To",
      name: "assignedTo",
    },
    {
      title: "Vertical",
      name: "vertical",
    },
    {
      title: "Wallet",
      name: "walletId",
    },
  ];

  useEffect(() => {
    if (ticketIndex === undefined) return;
    const data = value?.tickets[ticketIndex];
    if (!data) return;
    console.log(data);

    setInput(() => {
      return {
        ...data,
      };
    });
  }, []);

  const setProject = (items: string) => {
    setInput((prev) => {
      return {
        ...prev,
        project: items,
      };
    });
  };

  const handleSubmitForEdit = () => {
    if (ticketIndex === undefined) return;
    try {
      const ticketContainer = localStorage.getItem("TicketContainer");
      if (ticketContainer) {
        let ticketData = JSON.parse(ticketContainer);
        ticketData[ticketIndex] = {
          ...ticketData[ticketIndex],
          ...input,
        };
        localStorage.setItem("TicketContainer", JSON.stringify(ticketData));
        value?.fetchTicketContainer();
        setClose();
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  };
  const handleSubmitForAdd = () => {
    try {
      const currentDate = new Date();
      const date = currentDate.toLocaleDateString();
      const time = currentDate.toLocaleTimeString();

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

      tickets.push(updatedInput);

      localStorage.setItem("TicketContainer", JSON.stringify(tickets));
      setClose();
      value?.fetchTicketContainer();
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fromEdit) {
      {
        handleSubmitForEdit();
        return;
      }
    }
    handleSubmitForAdd();
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
            if (name)
              return (
                <label key={name} className="addTheTicketLabel">
                  <div>{title}</div>
                  <input
                    className="addTheTicketInput"
                    onClick={() =>
                      name === "project" ? setShowProject((x) => !x) : null
                    }
                    required
                    name={name}
                    value={input[name]}
                    onChange={(e) =>
                      name === "project"
                        ? null
                        : setInput({ ...input, [name]: e.target.value })
                    }
                  />
                  {showProject && name === "project" ? (
                    <div>
                      {projectArray.map((items, index) => {
                        return (
                          <div onClick={() => setProject(items)} key={index}>
                            {items}
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </label>
              );
          })}
          <div className="addToTextButtonContainer">
            <button className="buttonAddToText" type="submit">
              {fromEdit ? "Save Changes" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTheTicket;
