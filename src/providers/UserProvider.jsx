import UserContext from "../context/UserContext";
import { useState, useEffect } from "react";
import { fetchAllUsers, fetchMe } from "../api/users";

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false });
  const [allUsers, setAllUsers] = useState([]);

  // useEffect(() => {
  //   async function getMe() {
  //     if (user.loggedIn) {
  //       const me = await fetchMe();
  //       setUser(me);
  //     }
  //   }
  //   getMe();
  // }, []);

  useEffect(() => {
    async function getAllUsers() {
      const usersList = await fetchAllUsers();
      setAllUsers(usersList);
    }
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, allUsers, setAllUsers }}>
      {children}
    </UserContext.Provider>
  );
}
