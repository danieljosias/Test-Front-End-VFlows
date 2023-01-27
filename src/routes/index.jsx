import { Routes, Route } from "react-router-dom";
import Acess from '../pages/Access'

export default function Router(){
  return (
    <Routes>
      <Route path="/" element={<Acess/ >} />
    </Routes>
  );
};