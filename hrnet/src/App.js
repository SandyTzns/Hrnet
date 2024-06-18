import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasicTable from "./components/BasicTable";
import Form from "./components/Form";

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
