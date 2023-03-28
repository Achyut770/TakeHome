import React from "react";

export interface FormProps {
  input: input;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormsPropsTopAndMiddle extends FormProps {
  setInput: React.Dispatch<React.SetStateAction<input>>;
}

export interface input {
  assignedBy: string;
  group: string;
  assignedTo: string;
  project: string;
  vertical: string;
  subVertical: string;
  from: string;
  to: string;
  totalTickets: string;
}
