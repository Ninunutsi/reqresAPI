export interface IUserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserDetails {
  users: any[];
  onClick: (userId: number) => void;
}
