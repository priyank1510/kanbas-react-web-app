import { BsGripVertical } from "react-icons/bs";
import AssignmentControls from "./AssignmentControls";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaBook } from "react-icons/fa6";
import {db} from "../../Database";
import { Link, useParams } from "react-router";
import { ListGroup } from "react-bootstrap";

export default function Assignments() {
    const {cid}=useParams();
    const assignments = db.assignments.filter((a:any)=>a.course===cid);
    return (
        <div>
            <AssignmentControls />
            <br /><br   />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AssignmentHeaderControlButtons />
                        <div className="wd-weightage float-end">
                            <span className="wd-weight border-gray p-2 rounded-5 me-2 fs-5">40% of Total</span>
                        </div>
                    </div>
                    <ListGroup id="wd-assignment-groups">
                        {assignments.map((assignment:any)=>(
                            <ListGroup.Item as={Link} to={`/kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-group" key={assignment._id}>

                                <h4 className="wd-assignment-group-title"> <BsGripVertical className="me-2 fs-3" />
                                <span className="float-left text-success me-2">  <FaBook /></span>
        {assignment.title}</h4>
                                <p className="wd-assignments-group-description">{assignment.description}</p>
                                <div className="wd-assignment-details ms-5">
                                        <span className="wd-module-type text-danger">
                                            Multiple Modules
                                        </span> | &nbsp;
                                        <span className="wd-start-date">
                                            <b>Not available until</b> {assignment.available_from_date} at 12:00 am
                                        </span> |
                                        <span className="wd-end-date">
                                            <b> Due</b> {assignment.due_date} at 11:59 pm
                                        </span> | 
                                        <span className="wd-points">
                                            {assignment.points} pts
                                        </span>
                                    </div>
                           
                           
                           
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                
                </li>
            </ul>
        </div>
    );
}