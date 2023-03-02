// @flow

import React from "react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import Navbar from "../../organisms/Navbar";
import Table from "../../atoms/Table/Table";
import Input from "../../atoms/Input";
import PrimaryButton from "../../atoms/Buttons/PrimaryButton/PrimaryButton";

import { create } from "../../../redux/slices/users";
import type { User } from "../../../redux/slices/users/types";

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

  const [hasError, setError] = useState<boolean>(false);
  const [isInit, setInit] = useState<boolean>(true);

  const handleInputChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;

    if (isInit) {
      setInit(false);
    }

    setUserInfo({
      ...userInfo,
      [name]: target.value,
    });
  };

  const handleOnFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    if (!isValidFields(userInfo)) {
      setError(true);
    } else {
      dispatch(create(userInfo));
      setUserInfo(defaultValue);
      setInit(true);
      setError(false);
    }

    e.preventDefault();
  };

  useEffect(() => {
    console.log(userInfo);
    console.log(isValidFields(userInfo));
    setError(!isValidFields(userInfo));
  }, [userInfo]);

  return (
    <>
      <Navbar />
      <Container>
        <FormContainer>
          <FormTitle>Create New</FormTitle>
          {hasError && !isInit && (
            <StyledErrorCard>
              <p>
                There was a problem with your inputs. <br />
                Please try again later. dsadasdasdas asd asd asd asd asd
              </p>
            </StyledErrorCard>
          )}
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
