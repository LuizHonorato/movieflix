export interface User {
  name: string;
  email: string;
  password: string;
}

export interface IUserState {
  user: User | null;
}
