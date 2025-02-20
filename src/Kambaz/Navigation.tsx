import { Link ,useLocation} from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa";

export default function KambazNavigation() {
  const { pathname } = useLocation();
    const links = [
        { label: "Account", to: "/Kambaz/Account", icon: FaRegCircleUser, text: "Account" , id: "wd-account-link"},
        { label: "Dashboard",to: "/Kambaz/Dashboard", icon: AiOutlineDashboard , text: "Dashboard", id: "wd-dashboard-link"},
        { label: "Courses",to: "/Kambaz/Courses", icon: LiaBookSolid, text: "Courses", id: "wd-course-link"},
        { label: "Calendar",to: "/Kambaz/Calendar", icon: IoCalendarOutline ,text: "Calendar", id: "wd-calendar-link"},
        { label: "Inbox",to: "/Kambaz/Inbox", icon: FaInbox, text: "Inbox", id: "wd-inbox-link"},
        { label: "Labs",to: "/Labs", icon: IoSettingsOutline, text: "Labs", id: "wd-labs-link"},
    ];
  return (
    <ListGroup id="wd-kambaz-navigation" className="rounded-0 p-0 m-0 border-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 ">
      <ListGroup.Item action href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className=" border-0 bg-black text-danger text-center" ><img src="/images/NEU.png" width="75px" /></ListGroup.Item>
      {links.map((link)=>(<ListGroup.Item as={Link} to={link.to} id={link.id} className={`border-0   text-center ${pathname.includes(link.text)?"bg-white text-danger":"bg-black text-white" }`}> {link.icon({className:"fs-1 text-danger"})  }<br /> {link.text}</ListGroup.Item>))}
     </ListGroup>
);}
