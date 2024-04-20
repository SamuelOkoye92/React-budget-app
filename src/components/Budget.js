import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { fan } = useContext(AppContext);
  return (
    <div className="alert alert-secondary">
      <span>Budget: ${fan}</span>
    </div>
  );
};

export default Budget;
