import CourseNavigation from "./Navigation";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import { db } from "../Database";
export default function Courses() {
  const { cid } = useParams();
  const course = db.courses.find((c: any) => c._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
       <h2 className="text-danger">
     <FaAlignJustify className="me-4 fs-4 mb-1" />
       {course?.name} &gt; {pathname.split("/").pop()}</h2>
      <hr />
     
        
      <div className="d-flex"> 
           <div className="d-none d-md-block"><CourseNavigation /></div>

            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable/>} />
            </Routes>
            </div>        
    </div>
    </div>
  );
}
