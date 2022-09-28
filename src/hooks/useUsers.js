import { useContext } from "react";
import UserContext from "../context/UserContext";

const useUser = () => {
  const { user, setUser, allUsers, setAllUsers } = useContext(UserContext);

  return {
    user,
    setUser,
    allUsers,
    setAllUsers,
  };
};

export default useUser;
