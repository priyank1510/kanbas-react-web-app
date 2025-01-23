export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1  - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Single Page Navigation</li>
                  <li className="wd-content-item">HTML Exercises</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2, Lecture 2  - Formatting User Interfaces</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item"> React Router Dom</li>
                  <li className="wd-content-item">Navigation in React </li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Assignment 1 work</li>
                  <li className="wd-content-item">CSS Exercises</li>
                </ul>
              </li>
            </ul>

          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3, Lecture 3  - Styling the website</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Styling with CSS</li>
                  <li className="wd-content-item">The box model</li>
                </ul>
              </li>
              <li className="wd-lesson">
                <span className="wd-title">QUIZ</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Regular Expression </li>
                  <li className="wd-content-item">dynamic content generation</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  