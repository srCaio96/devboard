import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa estar dentro do AuthProvider");
  }
  const { loginUser, logOutUser } = context;

  async function logIn() {
    await loginUser();
  }

  async function logOut() {
    await logOutUser();
  }

  return { logIn, logOut, ...context };
}
