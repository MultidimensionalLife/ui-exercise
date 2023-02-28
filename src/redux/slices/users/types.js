// @flow

export type User = {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  status: string,
  createdOn: string,
};

export type Users = Array<User>;

export type UsersState = {
  fetching: boolean,
  hasError: boolean,
  data: Users,
};
