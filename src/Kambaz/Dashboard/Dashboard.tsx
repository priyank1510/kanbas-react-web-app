import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedContent from "../Account/ProtectedContent";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
        updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
                    {enrolling ? "My Courses" : "All Courses"}
                </button>
            </h1>

            <hr />

            <ProtectedContent allowedRoles={['FACULTY']}>
                <h5>New Course
                    <button className="btn btn-primary float-end me-2"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}> Add </button>
                    <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                        Update
                    </button>
                </h5>
                <br />
                <input value={course.name} className="form-control mb-2"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                <textarea value={course.description} className="form-control"
                    onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            </ProtectedContent>

            <hr />

            <div>
                <h2 id="wd-dashboard-published">Published Courses({courses.length})</h2>
                <hr />
                <div id="wd-dashboard-courses" className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {courses.map((course) => (
                            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <Link
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                        to={`/kambaz/Courses/${course._id}/Home`}
                                    >
                                        <img src={`/images/1234.jpeg`} width="100%" height={160} alt="Course" />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title overflow-y-hidden"
                                                style={{ maxHeight: 100 }}>
                                                {enrolling && (
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        updateEnrollment(course._id, !course.enrolled);
                                                    }}
                                                        className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} 
                                                    float-end`} >
                                                        {course.enrolled ? "Unenroll" : "Enroll"}
                                                    </button>
                                                )}
                                                {course.name}
                                            </h5>
                                            <p className="wd-dashboard-course-title card-text">{course.description}</p>
                                            <button className="btn btn-primary">
                                                Go </button>
                                            <ProtectedContent allowedRoles={['FACULTY']}>
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse({ ...course });
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            </ProtectedContent>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}