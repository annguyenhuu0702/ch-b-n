export interface resData<T> {
  status: number;
  data: {
    data: T | null;
    message: string;
  };
}

export interface resMessage {
  status: number;
  data: {
    message: string;
  };
}
