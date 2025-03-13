import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import {db} from "./Database";
export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse
}: {
    courses: any[];
    course: any;
    setCourse: (course: any)=> void;
    addNewCourse: () => void;
    deleteCourse: (id: string) => void;
    updateCourse: (id: string) => void;
}
) {
     const { currentUser } = useSelector((state: any) => state.accountReducer);
     const  enrollments = db.enrollments;
     if(! currentUser) { return null;}
     return (
    
    <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard {currentUser.lastName}</h1> <hr />
          
            
            {currentUser&& currentUser.role==="ADMIN" && (<div><h5>New Course
            
          <Button variant="primary" className=" float-end" id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </Button>
            <Button variant="success" className=" float-end me-2" id="wd-add-new-course-click"
                  onClick={() => updateCourse(course._id)} > Save </Button>
          </h5>  <input value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} className="form-control mb-2" />
      <textarea  onChange={(e) => setCourse({ ...course, description: e.target.value })} value={course.description} className="form-control"/><hr />
      <hr /></div>)}
          <br />
      

          
     
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.filter((course)=> enrollments.some((enrollment) => enrollment.user === currentUser._id && enrollment.course === course._id)).map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                    to={`/kambaz/Courses/${course._id}/Home`}>
                                    <img src={`/images/${course._id}.jpeg`} width="100%" height={160} alt="Course" />
                                    <div className="card-body">
                                        <h5 className="wd-dashboard-course-title card-title overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.name}
                                        </h5>
                                        <p className="wd-dashboard-course-title card-text">
                                            {course.description}
                                        </p>
                                        <Button className="btn btn-primary"> Go </Button>
                                        <Button variant="danger" className="float-end" onClick={(e) =>{ e.preventDefault(); deleteCourse(course._id)}}> Delete </Button>
                                        <Button variant="warning" onClick={(e) =>{ e.preventDefault(); setCourse(course)}} className="float-end me-2"> Edit </Button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}