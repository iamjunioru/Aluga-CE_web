export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  phone_number: string;
  has_property?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
