import { createContext, useContext, useReducer } from 'react';
import { initialState, toggleReducer } from '../reducers/toggleReducer';

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(toggleReducer, initialState);
  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error('useToggle must be used within a ToggleProvider');
  }
  return context;
};
