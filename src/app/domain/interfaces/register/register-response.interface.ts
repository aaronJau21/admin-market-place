export interface IRegisterResponse {
  data: IData;
  message: string;
}

export interface IData {
  created_at: Date;
  email: string;
  full_name: string;
  id: number;
  updated_at: Date;
}
