export interface UserCredentials {
  email: string;
  password: string;
}

export const VALID_USER: UserCredentials = {
  email: "olgazagurska@gmail.com",
  password: "Password123!",
};

export const INVALID_USER: UserCredentials = {
  email: "invalid@example.com",
  password: "wrong password",
};

export const EMPTY_FIELDS: UserCredentials = {
  email: "",
  password: "",
};
