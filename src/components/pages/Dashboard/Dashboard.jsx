// @flow

import React from "react";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import Navbar from "../../organisms/Navbar";
import Table from "../../atoms/Table/Table";
import Input from "../../atoms/Input";
import PrimaryButton from "../../atoms/Buttons/PrimaryButton/PrimaryButton";

import { create } from "../../../redux/slices/users";

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
`;

const VerticalDivider = styled.div`
  width: 30px;
`;

const HorizontalDivider = styled.div`
  height: 5px;
`;

function Dashboard(): React$Node {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState<UserInfoFields>({
    firstname: "",
    lastname: "",
    email: "",
    status: "",
  });

  const handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;

    setUserInfo({
      ...userInfo,
      [name]: target.value,
    });
  };

  const handleOnFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    dispatch(create(userInfo));

    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <Form onSubmit={handleOnFormSubmit}>
            <Input
              type="text"
              name="firstname"
              value={userInfo.firstname}
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="text"
              name="lastname"
              value={userInfo.lastname}
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <Input
              type="text"
              name="status"
              value={userInfo.status}
              onChange={handleInputChange}
            />
            <HorizontalDivider />
            <PrimaryButton label="Save" />
          </Form>
        </FormContainer>
        <VerticalDivider />
        <Table data={users.data} />
      </Container>
    </>
  );
}

export default Dashboard;
