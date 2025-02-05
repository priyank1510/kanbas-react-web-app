import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div>
       <ModulesControls />
       <br /><br /><br /><br />
        <ListGroup id="wd-modules rounded -0">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          
            <div className="wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 1  - Course Introduction, Syllabus, Agenda<ModuleControlButtons /></div>
            
             <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content rounded-0">
                 <ListGroup.Item className="wd-content-item"><BsGripVertical className="me-2 fs-3" /> Introduction to the course<LessonControlButtons/></ListGroup.Item>
               <ListGroup.Item className="wd-content-item"><BsGripVertical className="me-2 fs-3" />  Learn what is Web Development<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
                </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content rounded-0">
                 <ListGroup.Item className="wd-content-item"><BsGripVertical className="me-2 fs-3" /> Single Page Navigation<LessonControlButtons/></ListGroup.Item>
                 <ListGroup.Item className="wd-content-item"><BsGripVertical className="me-2 fs-3" /> HTML Exercises<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          
           <div className="wd-title p-3 ps-2 bg-secondary">Week 2, Lecture 2  - Formatting User Interfaces<ModuleControlButtons /></div>
          
           <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" />  React Router Dom<LessonControlButtons/></ListGroup.Item>
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> Navigation in React<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> Assignment 1 work<LessonControlButtons/></ListGroup.Item>
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> CSS Exercises<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>

          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          
            <div className="wd-title p-3 ps-2 bg-secondary">Week 3, Lecture 3  - Styling the website and Dynamic Content<ModuleControlButtons /></div>
         
              <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> Styling with CSS<LessonControlButtons/></ListGroup.Item>
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> The box model<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">QUIZ</span>
                <ListGroup className="wd-content rounded-0">
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> Regular Expression<LessonControlButtons/> </ListGroup.Item>
                  <ListGroup.Item className="wd-content-item"> <BsGripVertical className="me-2 fs-3" /> dynamic content generation<LessonControlButtons/></ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  