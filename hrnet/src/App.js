import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasicTable from "./components/BasicTable";
import Form from "./components/Form";

// 17.06
// 1. Faire le Tableau de "Current Employee" avec REACT Table as a component
// Quick video on React table
// If you can do more today : quick video on creating a React pluggin

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/employees" element={<BasicTable />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
