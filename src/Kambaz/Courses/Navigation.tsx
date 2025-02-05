import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CourseNavigation() {
  return (
    <ListGroup id="wd-courses-navigation" className =" wd rounded-0 ">
      <ListGroup.Item as = {Link} to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" className="active border-0">Home</ListGroup.Item>
      <ListGroup.Item as = {Link} to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" className="border-0 text-danger bg-white">Modules
        </ListGroup.Item>
      <ListGroup.Item as = {Link} to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" className="border-0 text-danger bg-white">Piazza</ListGroup.Item>
      <ListGroup.Item  as = {Link} to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link" className="border-0 text-danger bg-white">Zoom</ListGroup.Item>
      <ListGroup.Item as = {Link} to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link" className="border-0 text-danger bg-white">
          Assignments</ListGroup.Item>
      <ListGroup.Item  as = {Link} to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link" className="border-0 text-danger bg-white">Quizzes
        </ListGroup.Item>
      <ListGroup.Item as = {Link}  to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link" className="border-0 text-danger bg-white">Grades</ListGroup.Item>
      <ListGroup.Item as = {Link} to="/Kambaz/Courses/1234/People" id="wd-course-people-link" className="border-0 text-danger bg-white">People</ListGroup.Item>
    </ListGroup>
  );
}
