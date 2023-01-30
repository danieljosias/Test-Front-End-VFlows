import { createContext, useState } from "react";
import { contracts } from "../../mocks/contracts";

export const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
    const [contractData, setContractData] = useState(contracts);
      
    return (
        <ContractContext.Provider
          value={{contractData,setContractData}}
        >
          {children}
        </ContractContext.Provider>
    )
}