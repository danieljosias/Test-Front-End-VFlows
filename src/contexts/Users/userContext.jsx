import { createContext, useState } from "react";
import { users } from "../../mocks/users";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(users);
    const [cnpj, setCnpj] = useState();
    
    return (
        <UserContext.Provider
          value={{userData,cnpj, setCnpj}}
        >
          {children}
        </UserContext.Provider>
      );
}