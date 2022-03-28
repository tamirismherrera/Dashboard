import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function signin(e) {
    setUser({
      nome: "Tamiris",
    });
    e.preventDefault();
  }

  function signout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  const { user, signin, signout } = context;
  return { user, signin, signout };
}
