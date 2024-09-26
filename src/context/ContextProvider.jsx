import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notifications: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  // Will set the clicked state to true only for the clicked item
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  return (
    <StateContext.Provider 
      value={{
        activeMenu, setActiveMenu,
        isClicked, setIsClicked,
        handleClick,
        screenSize, setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);