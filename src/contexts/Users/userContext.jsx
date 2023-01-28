import { createContext, useState } from "react";
import { users } from "../../mocks/users";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(users);
    
    return (
        <UserContext.Provider
          value={{userData}}
        >
          {children}
        </UserContext.Provider>
      );
}