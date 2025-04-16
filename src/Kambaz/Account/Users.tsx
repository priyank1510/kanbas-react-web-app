import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import PeopleDetails from "../Courses/People/Details";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
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
      <button onClick={createUser} className="btn btn-primary">
        <FaPlus /> Add User
      </button>
      <PeopleTable users={users} />
    </div>
  );
}