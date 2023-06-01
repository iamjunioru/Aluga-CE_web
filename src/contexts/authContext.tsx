import { createContext, useState, ReactNode } from "react";

type AuthUser = {
  id: string;
  email: string;
  has_property: boolean;
  name: string;
  phone_number: string;
};

export type AuthContextType = {
  user: AuthUser;
  setUser: (user: AuthUser) => void;
  signOut: () => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const signOut = () => {
    setUser({
      id: "",
      email: "",
      has_property: false,
      name: "",
      phone_number: "",
    });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
