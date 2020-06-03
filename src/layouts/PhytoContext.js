import React, {useState} from 'react'

export const PhytoContext = React.createContext()

  export const PhytoContextProvider = ({ children }) => {
    const [opened, setOpened] = useState("introduction");
    const [turbowegOpened, setTurbowegOpened] = useState("actualization");
    return (
      <PhytoContext.Provider value={{opened,setOpened, turbowegOpened, setTurbowegOpened}}>
        {children}
      </PhytoContext.Provider>
    );
  };
