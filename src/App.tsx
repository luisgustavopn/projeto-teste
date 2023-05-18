import { Route ,Routes } from "react-router-dom";
import {Locals} from "./pages/Locals";
import {Local} from "./pages/Local";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Locals/>}/>
      <Route path="/locals/*" element={<Local/>}/>
    </Routes>
  )
}
