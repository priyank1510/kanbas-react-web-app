import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div id="wd-labs">
      <div style={{ textAlign: "center" }}>
      Name: <b>Priyankkumar Patel</b> <br />
      Section: <b>01</b> <br />
      CRN: <b>35649</b> <br /> <br />
      <h1>Labs</h1>
      </div>
      <TOC />
      <Routes>
        <Route path="/"    element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>

      
    </div>
  );
}
