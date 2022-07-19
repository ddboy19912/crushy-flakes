import React,{useState, useContext} from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

      const [theme, setTheme] = useState("light");
      const [dropdown, setDropdown] = useState(false)

const ToggleDropdown = () => {
    setDropdown(!dropdown)
}

    return(
        <AppContext.Provider value={{theme,
         setTheme,
          ToggleDropdown,
           setDropdown,
            dropdown
            }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return (
useContext(AppContext)
    )
}