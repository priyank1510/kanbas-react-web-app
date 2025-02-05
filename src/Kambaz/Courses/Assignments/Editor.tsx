import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {  FaTimes } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
        <Container>
        <div id="wd-assignments-editor">
            <form action="#" className="assignment-editor" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                <label htmlFor="wd-name" className="mb-2">
                    <b>Assignment Name</b>
                </label>
                <br />
                <input id="wd-name" className="form-control  w-100" defaultValue="A1" />
                <br />
             
                <Col sm="12" className="p-3 mt-3 border rounded">    
        <p>The assignment is <span className="text-danger" >available online</span></p>
        <p>Submit a link to the landing page of your Web application running on <span className="red-underline">Netlify</span>.</p>
        <p>The landing page should include the following:</p>
        <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>Link to the <span className="red-underline" >Kanbas</span> application</li>
            <li>Links to all relevant source code repositories</li>
        </ul>
        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
        </Col>
        
                <br />
                <Form.Group as={Row} className="mb-3" controlId="formPoints">
          <Form.Label column sm="2">
            Points
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" defaultValue="100" className="w-100"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
          <Form.Label column sm="2">
            Assignment Group
          </Form.Label>
          <Col sm="10">
            <Form.Select className="w-100">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>PROJECTS</option>
            </Form.Select>  
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formDisplayGrade">
          <Form.Label column sm="2">
            Display Grade as
          </Form.Label>
          <Col sm="10">
            <Form.Select className="w-100">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">

  <Form.Label column sm="2" >
    Submission Type
  </Form.Label>
  <Col sm="10">
  <div className="p-3 mt-3 border rounded" >
    <Form.Select className="w-100">
      <option>Online</option>
      <option>On Paper</option>
      <option>No Submission</option>
    </Form.Select>

    <br/>
      <Form.Label className="fw-bold">Online Entry Options</Form.Label>
      <Form.Group>
        <Form.Check type="checkbox" label="Text Entry" /><br/>
        <Form.Check type="checkbox" label="Website URL" defaultChecked /><br/>
        <Form.Check type="checkbox" label="Media Recordings" /><br/>
        <Form.Check type="checkbox" label="Student Annotation" /><br/>
        <Form.Check type="checkbox" label="File Uploads" />
      </Form.Group>
    </div>
  </Col>
</Form.Group>



<Form.Group as={Row} className="mb-3">
 
    <Form.Label column sm="2">Assign</Form.Label>

    
    <Col sm="10">
      <div className="p-3 border rounded">
        
        <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Assign to</Form.Label>
              <div className="d-flex align-items-center p-2 border rounded">
               <div className="bg-light text-grey rounded-square p-2"> Everyone     
                <FaTimes className="ms-2 cursor-pointer"  />
              </div>
              </div>  
          
        </Form.Group>
        
        
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Due</Form.Label>
          <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" className="w-100"/>
        </Form.Group>

       
        <Form.Group as={Row} className="mb-3">
          <Col sm="6">
            <Form.Label className="fw-bold">Available from</Form.Label>
            <Form.Control type="datetime-local" defaultValue="2024-05-06T12:00" className="w-100" />
          </Col>
          <Col sm="6">
            <Form.Label className="fw-bold">Until</Form.Label>
            <Form.Control type="datetime-local"  defaultValue="" className="w-100" />
          </Col>
        </Form.Group>
      </div>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
  <div className=" d-flex justify-content-end mt-3">
    <Button variant="light" className="me-2">Cancel</Button>
    <Button variant="danger">Save</Button>
   </div>
   </Form.Group>

            </form>
        </div>
        </Container>
    );
}