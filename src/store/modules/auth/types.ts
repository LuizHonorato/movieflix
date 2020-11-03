export interface User {
  name: string;
  email: string;
  password: string;
  is_online: boolean;
}

export interface IUserState {
  user: User | null;
}
