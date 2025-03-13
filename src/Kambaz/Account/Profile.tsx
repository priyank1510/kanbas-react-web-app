import {  useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { setCurrentUser } from "./reducer";
import { Button } from "react-bootstrap";
export default function Profile() {
    const {currentUser} = useSelector((state:any) => state.accountReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signout = () => { dispatch (setCurrentUser(null)); navigate("/Kambaz/Account/Signin");};

    if(! currentUser){ return <div>Sign in to view profile</div>}
    return (
        <div id="wd-profile-screen" >
            <h3>Profile</h3>
            <input id="wd-username" value={currentUser.username} placeholder="username" 
            className="form-control mb-2" />
            <input id="wd-password" value={currentUser.password} placeholder="password"
            className="form-control mb-2" />
            <input id="wd-firstname" value={currentUser.firstName} placeholder="First Name" 
            className="form-control mb-2" />
            <input id="wd-lastname" value={currentUser.lastName} placeholder="Last Name"
            className="form-control mb-2" />
            <input id="wd-dob" value="2001-10-15" type="date"
            className="form-control mb-2" />
            <input id="wd-email" value={currentUser.email} type="email"
            className="form-control mb-2" />
            <select id="wd-role" className="form-control mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Button id="wd-signout" onClick={signout} variant="danger">Signout</Button>
        </div>
    );
}