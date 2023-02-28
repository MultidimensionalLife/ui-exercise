// @flow

import React from "react";

import Navbar from "../../organisms/Navbar";

const DATA = [
  {
    userId: "admin",
    firstname: "Admin",
    lastname: "User",
    email: "support@cixsoft.com",
    status: "registered",
    createdOn: "date",
  },
];

function Dashboard(): React$Node {
  return (
    <>
      <Navbar />
      <table border={1}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          {DATA.map((row, index) => (
            <tr key={`${row.userId}-${row.createdOn}`}>
              <td>{row.userId}</td>
              <td>{row.firstname}</td>
              <td>{row.lastname}</td>
              <td>{row.email}</td>
              <td>{row.status}</td>
              <td>{row.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Dashboard;
