import { getAuth } from "firebase/auth";

import { useState, useEffect, createContext, useMemo, useContext } from "react";
import nookies from "nookies";

const AuthContext = createContext({
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    return getAuth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUserState(null);
        nookies.set(null, "token", "", { path: "/" });
      } else {
        setUserState(user);
        const token = await user.getIdToken();
        nookies.destroy(null, "token");
        nookies.set(null, "token", token, { path: "/" });
      }
    });
  }, []);

  useEffect(() => {
    const refreshToken = setInterval(async () => {
      const { currentUser } = getAuth();

      if (currentUser) {
        await currentUser.getIdToken(true);
      }
    }, 10 * 60 * 1000);
    return () => clearInterval(refreshToken);
  }, []);

  const user = useMemo(() => ({ user: userState }), [userState]);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
