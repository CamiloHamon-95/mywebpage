import React from 'react';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const [theme, setTheme] = React.useState('light');
  const [menuState, setMenuState] = React.useState(false);
  
  return (
    <TodoContext.Provider value={{
      theme,
      setTheme,
      menuState,
      setMenuState
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };