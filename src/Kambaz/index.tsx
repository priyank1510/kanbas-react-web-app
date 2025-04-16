import "./styles.css";
import Account from "./Account";
import Dashboard from "./Dashboard/Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import { Route, Routes, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store  from "./store";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";


export default function Kambaz() {
    const [courses, setCourses] =useState <any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const [enrolling, setEnrolling] = useState<boolean>(false);  
 

     const findCoursesForUser = async () => {
      try {
        const courses = await userClient.findCoursesForUser(currentUser._id);
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };







     const updateEnrollment = async (courseId: string, enrolled: boolean) => {
      if (enrolled) {
        await userClient.enrollIntoCourse(currentUser._id, courseId);
      } else {
        await userClient.unenrollFromCourse(currentUser._id, courseId);
      }
      setCourses(
        courses.map((course) => {
          if (course._id === courseId) {
            return { ...course, enrolled: enrolled };
          } else {
            return course;
          }
        })
      );
    };
   



    const fetchCourses = async () => {
      try {
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser(
          currentUser._id
        );
        const courses = allCourses.map((course: any) => {
          if (enrolledCourses.find((c: any) => c._id === course._id)) {
            return { ...course, enrolled: true };
          } else {
            return course;
          }
        });
        setCourses(courses);
      } catch (error) {
        console.error(error);
      }
    };
   

    useEffect(() => {
      if (enrolling) {
        fetchCourses();
      } else {
        findCoursesForUser();
      }
    }, [currentUser, enrolling]);

 
    const [course, setCourse] = useState<any>({
      _id: "0", name: "New Course", number: "New Number", image: "/images/1234.jpeg",
      startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description"
    });
 

     
     const addNewCourse = async() => {
        const newCourse = await courseClient.createCourse(course);
        setCourses([ ...courses, newCourse ]);
      };
      const deleteCourse = async(courseId: string) => {
        try {
          await courseClient.deleteCourse(courseId);
          // Update the courses list by removing the deleted course
          setCourses(courses.filter((course) => course._id !== courseId));
          
          // If the current user was enrolled in this course, update their enrollment state
          if (currentUser) {
            const updatedEnrollments = await userClient.findCoursesForUser(currentUser._id);
            setCourses(prevCourses => 
              prevCourses.map(course => ({
                ...course,
                enrolled: updatedEnrollments.some((e: any) => e._id === course._id)
              }))
            );
          }
        } catch (error) {
          console.error("Error deleting course:", error);
        }
      };
      const updateCourse = async () => {
        await courseClient.updateCourse(course);
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) { return {...c, ...course}; }
            else { return c; }
          })
        );
      };
   
    return ( 
      <Provider store={store}>
      <Session>
        <div id="wd-kambaz">
            <KambazNavigation />
            <div>
                <div className="wd-main-content-offset p-3">
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element={<ProtectedRoute>< Dashboard courses={courses} course={course} setCourse={setCourse} addNewCourse={addNewCourse} deleteCourse={deleteCourse}  updateEnrollment={updateEnrollment}  updateCourse={updateCourse} enrolling={enrolling} setEnrolling={setEnrolling} /></ProtectedRoute>} />
                        <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses= {courses} /></ProtectedRoute>} />
                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
        </Session>
        </Provider>
    );
}
