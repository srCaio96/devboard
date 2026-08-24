import React, { useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "../../../app/firebase/config.ts";
import { loginWithGoogle, logOut } from "../services/authService";
import { AuthContext } from "../contexts/AuthContext.ts";

export function AuthProvier({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function loginUser() {
    setLoading(true);
    try {
      const user = await loginWithGoogle();
      setUser(user);
    } catch (e) {
      console.error("Erro no login:", e);
    } finally {
      setLoading(false);
    }
  }

  async function logOutUser() {
    setLoading(true);
    try {
      await logOut();
      setUser(null);
    } catch (e) {
      console.error("Erro no logout:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
