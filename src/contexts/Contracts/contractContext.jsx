import { createContext, useState } from "react";
import { contracts } from "../../mocks/contracts";

export const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
    const [contractData, setContractData] = useState(contracts);
    const [retention, setRetention] = useState();
    const [code, setCode] = useState();
    const [title, setTitle] = useState();


    return (
        <ContractContext.Provider
          value={{contractData,setContractData, retention, setRetention, code, setCode, title, setTitle}}
        >
          {children}
        </ContractContext.Provider>
    )
}