import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox } from "react-icons/fa";

export default function KambazNavigation() {
  return (
    <ListGroup id="wd-kambaz-navigation" className="rounded-0 p-0 m-0 border-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2 ">
      <ListGroup.Item action href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank" className=" border-0 bg-black text-danger text-center" ><img src="/images/NEU.png" width="75px" /></ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Account" id="wd-account-link" className=" border-0 bg-white text-danger text-center"> <FaRegCircleUser className="fs-1 text-danger" /><br /> Account</ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Dashboard" id="wd-dashboard-link" className=" border-0 bg-black text-danger text-center"><AiOutlineDashboard className="fs-1 text-danger" /><br /> Dashboard</ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Courses" id="wd-course-link" className="border-0 bg-black text-danger text-center"> <LiaBookSolid className="fs-1 text-danger" /><br /> Courses</ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Calendar" id="wd-calendar-link" className="border-0 bg-black text-danger text-center">  <IoCalendarOutline className="fs-1 text-danger" /><br/> Calendar</ListGroup.Item>
      <ListGroup.Item as={Link} to="/Kambaz/Inbox" id="wd-inbox-link" className=" border-0 bg-black text-danger text-center"> <FaInbox className="fs-1 text-danger" /><br /> Inbox</ListGroup.Item>
      <ListGroup.Item as={Link} to="/Labs" id="wd-labs-link" className=" border-0 bg-black text-danger text-center"><IoSettingsOutline className="fs-1 text-danger" /><br /> Labs</ListGroup.Item>
    </ListGroup>
);}
