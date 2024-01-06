import { createContext, useContext, useReducer } from 'react';
import { initialState, toggleReducer } from '../reducers/toggleReducer';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);
  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};


