import React from 'react'

const AppContext = React.createContext({
  isPooping: true
});

export interface AppProviderProps {
  children: any
}

const defaultState = {
  isPooping: true
}

export const AppProvider: React.SFC<AppProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={defaultState}>
      {children}
    </AppContext.Provider>
  );
}

export const AppConsumer = AppContext.Consumer;

export default AppContext;