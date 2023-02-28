// @flow

import React from "react";

import styled from "styled-components";

import Navbar from "../../organisms/Navbar";
import Table from "../../atoms/Table/Table";

const DATA = [
  {
    userId: "admin",
    firstname: "Admin",
    lastname: "User",
    email: "support@cixsoft.com",
    status: "registered",
    createdOn: "date",
  },
  {
    userId: "admin2",
    firstname: "Admin2",
    lastname: "User2",
    email: "support2@cixsoft.com",
    status: "registered2",
    createdOn: "date2",
  },
];

function Dashboard(): React$Node {
  return (
    <>
      <Navbar />
      <Table data={DATA} />
    </>
  );
}

export default Dashboard;
