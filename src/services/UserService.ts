import { http } from '../http';

export const UserService = {
  signIn: async (email: string, password: string) => {
    const { data } = await http.post('/users/signin', { email, password });
    return data;
  },
  signUp: async (name: string, email: string, phone_number: string, password: string) => {
    const { data } = await http.post('/users/signup', { name, email, phone_number, password });
    return data;
  }
}
