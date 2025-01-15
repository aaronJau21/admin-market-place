export interface IProfileSellerResponse {
  seller: ISeller;
}

export interface ISeller {
  id: number;
  user_id: number;
  storeName: string;
  storeDescription: string | null;
  created_at: Date;
  updated_at: Date;
}
