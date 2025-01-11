import { IUser } from '../login/login-response.interface';

export interface IUserProfileReponse {
  user: IUser;
}

export interface User {
  id:            number;
  full_name:     string;
  email:         string;
  image:         null;
  confirm_count: number;
  token:         null;
  status:        number;
  role:          string;
  created_at:    Date;
  updated_at:    Date;
}
