import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
  ],
};

export const AppContext = createContext();

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
};






function Testing() {
  const [profile, setProfile] = useSate({
    name: Oluwaye Olayinbi,
    carrier: {
      Teaching: Doctorate in physics,
      Sports: football,
      ministry: pastor
    }
  });

  function handleSubmit() {
    setProfile({
      ...profile,
      name: e.target.value
    });
  }

  function handleTeachingChange(e) {
    setProfile({
      ...profile,
      carrier: {
        ...profile.carrier,
        Sports: e.target.value
      }
    })
      
  }

  return (
    <>
      <form Onsubmit={handleSubmit}>
        <textarea placeholder='Message' value={message} />
        <button type='Submit'>
          click
        </button>
      </form>
    </>
  )
}



