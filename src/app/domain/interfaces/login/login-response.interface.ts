export interface ILoginResponse {
  token: string;
  user:  IUser;
}

export interface IUser {
  name:  string;
  email: string;
  role:  string;
}
