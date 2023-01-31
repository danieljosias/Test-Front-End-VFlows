import { Routes, Route, Navigate } from "react-router-dom";
import Access from '../pages/Access'
import Contracts from '../pages/Contracts'
import Invoices from '../pages/Invoices'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/access" replace={true}/>} />
      <Route path="/access" element={<Access />} />
      <Route path="/contracts" element={<Contracts />} />
      <Route path="/invoices" element={<Invoices/>} />
    </Routes>
  );
};