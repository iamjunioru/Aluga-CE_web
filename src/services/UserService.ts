import { http } from '../http';

export const UserService = {
  signIn: async (email: string, password: string) => {
    const { data } = await http.post('/signIn', { email, password });
    return data;
  },
  signUp: async (email: string, password: string, name: string, phone_number: string) => {
    const { data } = await http.post('/signUp', { name, email, phone_number, password });
    return data;
  }
}
