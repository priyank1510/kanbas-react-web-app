import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
 
export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <h1>Kambaz</h1>
      Name: <b>Priyank Patel</b> <br />
            Section: <b>01</b> <br />
            CRN: <b>35649</b> <br /> <br />
            <a id="wd-github" href="https://github.com/priyank1510/kanbas-react-web-app" target="_blank" rel="noreferrer">Github Repository</a><br /><br />
      <table>
        <tr>
          <td valign="top">
            <KambazNavigation />
          </td>
          <td valign="top">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
      </Routes>
      </td>
        </tr>
      </table>
      
    </div>
);}
