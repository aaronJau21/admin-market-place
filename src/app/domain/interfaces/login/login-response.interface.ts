export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  role: string;
}
