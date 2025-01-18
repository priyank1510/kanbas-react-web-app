import { Link } from "react-router-dom";
export default function TOC() {
 return (
 <div>
   <ul>
   <li><Link to="/Labs"      id="wd-a"> Labs </Link></li>
   <li><Link to="/Labs/Lab1" id="wd-a1">Lab 1</Link></li>
   <li><Link to="/Labs/Lab2" id="wd-a2">Lab 2</Link></li>
   <li><Link to="/Labs/Lab3" id="wd-a3">Lab 3</Link></li>
   <li><Link to="/Kambaz"    id="wd-k"> Kambaz</Link></li>
  </ul>
  <a id="wd-github" href="https://github.com/priyank1510/kanbas-react-web-app" target="_blank" rel="noreferrer">Github</a>   
 </div>
 );
}
