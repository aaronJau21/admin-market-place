export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface IUser {
  id: number;
  full_name: string;
  email: string;
  image: null;
  confirm_count: number;
  token: null;
  status: number;
  role: string;
  created_at: Date;
  updated_at: Date;
}
