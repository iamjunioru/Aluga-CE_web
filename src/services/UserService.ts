import { http } from "../http";

export const UserService = {
  signIn: async (email: string, password: string) => {
    const { data } = await http.post("/signIn", { email, password });
    return data;
  },
  signUp: async (
    email: string,
    password: string,
    name: string,
    phone_number: string
  ) => {
    const { data } = await http.post("/signUp", {
      name,
      email,
      phone_number,
      password,
    });
    return data;
  },
  getUser: async (id: string) => {
    // pass headers to get user
    const { data } = await http.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  },
  updateUser: async (
    id: string,
    email: string,
    password: string,
    name: string,
    phone_number: string
  ) => {
    const { data } = await http.put(`/user/${id}`, {
      name,
      email,
      phone_number,
      password,
    });
    return data;
  },
  getSpecificUser: async (id: string) => {
    const { data } = await http.get(`/users/${id}`);
    return data;
  },
};
