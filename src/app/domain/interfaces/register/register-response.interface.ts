export interface IRegisterResponse {
  message: string;
  data: IData;
}

export interface IData {
  full_name: string;
  email: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}
