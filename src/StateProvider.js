import React, { createContext, useContext, useReducer } from "react";

//createContext:Creates a Context object
//useContext:useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level.
//useReducer:The useReducer Hook accepts two arguments.he reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer to all the components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
