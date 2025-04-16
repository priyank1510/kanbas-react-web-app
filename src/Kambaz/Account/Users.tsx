import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import PeopleDetails from "../Courses/People/Details";
import { FaPlus } from "react-icons/fa";
import ProtectedContent from "./ProtectedContent";
export default function Users() {

  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("");
 const { uid } = useParams();

 const [role, setRole] = useState("");
  const createUser = async () => {
    const user = await client.createUser({
      username: `newuser${Date.now()}`,
            password: "password123",
            firstName: "New",
            lastName: `User${users.length + 1}`,
            email: `email${users.length + 1}@neu.edu`,
            dob: new Date("1972-02-19T00:00:00.000Z"),
            role: "STUDENT",
            loginId: `${Date.now()}S`,
            section: "S101",
            lastActivity: new Date(),
            totalActivity: "00:00:00"
    });
    setUsers([...users, user]);
  };

 
 const filterUsersByRole = async (role: string) => {
   setRole(role);
   if (role) {
     const users = await client.findUsersByRole(role);
     setUsers(users);
   } else {
     fetchUsers();
   }
 };

 const filterUsersByName = async (name: string) => {
   setName(name);
   if (name) {
     const users = await client.findUsersByPartialName(name);
     setUsers(users);
   } else {
     fetchUsers();
   }
 };


 const fetchUsers = async () => {
   const users = await client.findAllUsers();
   setUsers(users);
 };
 useEffect(() => {
   fetchUsers();
 }, [uid]);
 return (
   <div>
    <PeopleDetails fetchUsers={fetchUsers}/>
     <h3>Users  <button onClick={createUser}
              className="float-end btn btn-danger">
        <FaPlus className="me-2" />
        People
      </button></h3>
     <input placeholder="Search people" onChange={
               (e) => filterUsersByName(e.target.value)}
             className="form-control float-start w-25"
      />
     <select value={role} onChange={
        (e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
      <br/>
      <br/>
      <br/>
     <PeopleTable users={users} />
   </div>
);}