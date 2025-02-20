import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {  FaTimes } from "react-icons/fa";
import {db} from "../../Database";
import { useParams  } from "react-router-dom";
export default function AssignmentEditor() {
  const {aid}=useParams(); 
  const assignment =db.assignments.find((a:any)=>a._id===aid); 
  return (
        <Container>
        <div id="wd-assignments-editor">
            <form action="#" className="assignment-editor" style={{ maxWidth: "1000px", margin: "0 auto" }}>
                
                <br />
                <input id="wd-name" className="form-control  w-100" value={assignment?.title} />
                <br />
                <textarea id="wd-description" className="form-control w-100" rows={10} defaultValue={assignment?.description} />
                
                <br />
                <Form.Group as={Row} className="mb-3" controlId="formPoints">
          <Form.Label column sm="2">
            Points
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" defaultValue={assignment?.points} className="w-100" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssignmentGroup">
          <Form.Label column sm="2">
            Assignment Group
          </Form.Label>
          <Col sm="10">
            <Form.Select className="w-100" defaultValue={assignment?.Assignmentgroup}> 
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
            <Form.Select className="w-100" defaultValue={assignment?.display_grade}>
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
    <Form.Select className="w-100" defaultValue={assignment?.submissiontype}>
      <option>Online</option>
      <option>On Paper</option>
      <option>No Submission</option>
    </Form.Select>

    <br/>
      <Form.Label className="fw-bold">Online Entry Options</Form.Label>
      <Form.Group >
        <Form.Check type="checkbox" label="Text Entry" /><br/>
        <Form.Check type="checkbox" label="Website URL"  /><br/>
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
          <Form.Control type="date" defaultValue={assignment?.due_date} className="w-100"/>
        </Form.Group>

       
        <Form.Group as={Row} className="mb-3">
          <Col sm="6">
            <Form.Label className="fw-bold">Available from</Form.Label>
            <Form.Control type="date" defaultValue={assignment?.available_from_date} className="w-100" />
          </Col>
          <Col sm="6">
            <Form.Label className="fw-bold">Until</Form.Label>
            <Form.Control type="date"  defaultValue={assignment?.available_until_date} className="w-100" />
          </Col>
        </Form.Group>
      </div>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
  <div className=" d-flex justify-content-end mt-3">
    <Button variant="light" className="me-2">Cancel</Button>
    <Button variant="danger" >Save</Button>
   </div>
   </Form.Group>

            </form>
        </div>
        </Container>
    );
}