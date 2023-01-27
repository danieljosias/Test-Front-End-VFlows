import { Routes, Route } from "react-router-dom";
import Acess from '../pages/Access'
import Contracts from '../pages/Contracts'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Acess />} />
      <Route path="/contracts" element={<Contracts />} />
    </Routes>
  );
};