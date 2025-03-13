
import "./styles.css";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { Route, Routes, Navigate } from "react-router";
import { useState } from "react";
import { db } from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kambaz() {
    const [courses, setCourses] =useState (db.courses);
    const [course, setCourse] = useState<any>({
        _id: "0", name: "New Course", number: "New Number", image: "/images/1234.jpeg",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description"
      });
      const addNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
                setCourses([...courses, newCourse ]);
      };
      const deleteCourse = (id: string) => {
        setCourses(courses.filter((course) => course._id !== id));
      };
      const updateCourse = (id: string) => {
        setCourses(
          courses.map((c) => {
            if (c._id === id) { return {...c, ...course}; }
            else { return c; }
          })
        );
      };
   
    return (
        <div id="wd-kambaz">
            <KambazNavigation />
            <div>
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={<ProtectedRoute>< Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse} updateCourse={updateCourse} /></ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses= {courses} /></ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
