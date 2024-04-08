import React, { createContext, useReducer } from "react";

const initailState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
  ],
};

export const AppContext = createContext();

const AppProvider = (props) => {
  const [state, dispatch] = useReducer();
};

const chemists = people.filter((person) => person.profession === "chemist");
const listItems = chemists.map((person) => <li></li>);
