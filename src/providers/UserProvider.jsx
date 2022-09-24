import UserContext from "../context/UserContext";
import { useState, useEffect } from "react";
import { fetchMe } from "../api/users";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });

  useEffect(() => {
    async function getMe() {
      const me = await fetchMe();
      setUser(me);
    }
    getMe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
