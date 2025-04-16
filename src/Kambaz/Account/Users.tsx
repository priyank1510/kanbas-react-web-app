import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import PeopleDetails from "../Courses/People/Details";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const { uid } = useParams();

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
      <PeopleDetails />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Users</h3>
        <button onClick={createUser} className="btn btn-primary">
          <FaPlus /> Add User
        </button>
      </div>
      
      <div className="d-flex gap-2 mb-3">
        <input 
          type="text" 
          placeholder="Search people" 
          value={name}
          onChange={(e) => filterUsersByName(e.target.value)}
          className="form-control w-25"
        />
        <select 
          value={role} 
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>

      <PeopleTable users={users} />
    </div>
  );
}