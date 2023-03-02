// @flow

import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

import styled from "styled-components";

import Navbar from "../../organisms/Navbar";
import Table from "../../atoms/Table/Table";
import Input from "../../atoms/Input";
import PrimaryButton from "../../atoms/Buttons/PrimaryButton/PrimaryButton";

import { create, update, remove } from "../../../redux/slices/users";

type UserInfoFields = {
  firstname: string,
  lastname: string,
  email: string,
  status: string,
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  background-color: #3a4752;
  padding: 0.5em;
  border-radius: 3px;
  width: 250px;
`;

const VerticalDivider = styled.div`
  width: 30px;
`;

const HorizontalDivider = styled.div`
  height: 5px;
`;

const FormTitle = styled.h3`
  color: #76828c;
  margin: 0.5em 0;
`;

const StyledErrorCard = styled.div`
  padding: 0 0.3em;
  font-size: 12px;
  background-color: white;
`;

const isValidFields = (userInfo: UserInfoFields): boolean => {
  return (
    userInfo.firstname !== "" &&
    userInfo.lastname !== "" &&
    userInfo.email !== "" &&
    userInfo.status !== ""
  );
};

const defaultValue: UserInfoFields = {
  firstname: "",
  lastname: "",
  email: "",
  status: "",
};

function Dashboard(): React$Node {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState<UserInfoFields>(defaultValue);

  const [selectedUserCount, setCount] = useState<number>(0);

  const [selectedRows, setSelectedRows] = useState<Array<string>>([]);

  const [editMode, setEditMode] = useState<"new" | "update">("new");

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;

    setUserInfo({
      ...userInfo,
      [name]: target.value,
    });
  };

  const handleOnFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    if (!isValidFields(userInfo)) {
      toast.warn("There was a problem with your inputs.  Please try again.");
    } else {
      if (editMode === "new") {
        dispatch(create(userInfo));
      } else {
        const id = selectedRows[0];
        dispatch(
          update({
            id: id,
            data: userInfo,
          })
        );
      }

      setUserInfo(defaultValue);
    }

    e.preventDefault();
  };

  return (
    <>
      <Navbar
        onAdd={() => {
          if (editMode === "new") return;

          setEditMode("new");
        }}
        onEdit={() => {
          if (selectedUserCount > 1 || selectedUserCount === 0) {
            toast.error("Please select at least one record.");
            return;
          }

          const id = selectedRows[0];

          const { firstname, lastname, email, status } = users.data.find(
            (row) => row.id === id
          );

          setUserInfo({
            firstname,
            lastname,
            email,
            status,
          });

          setEditMode("update");
        }}
        onDelete={() => {
          if (selectedRows.length === 0) {
            toast.error("Please select at least one record to delete.");
            return;
          }
          dispatch(
            remove({
              ids: selectedRows,
            })
          );
        }}
        onRefresh={() => {}}
        onSearch={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Container>
        <FormContainer>
          <FormTitle>Create New</FormTitle>
          <Form onSubmit={handleOnFormSubmit}>
            <Input
              type="text"
              name="firstname"
              value={userInfo.firstname}
              placeholder="Firstname"
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="text"
              name="lastname"
              value={userInfo.lastname}
              placeholder="Lastname"
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="email"
              name="email"
              value={userInfo.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="text"
              name="status"
              value={userInfo.status}
              placeholder="Status"
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <PrimaryButton label={editMode === "new" ? "Save" : "Update"} />
          </Form>
        </FormContainer>
        <VerticalDivider />
        <Table
          data={users.data}
          refKey="id"
          onRowSelect={(count) => setCount(count)}
          getSelectedRows={(rows) => setSelectedRows(rows)}
          searchTerm={searchTerm}
        />
      </Container>
    </>
  );
}

export default Dashboard;
