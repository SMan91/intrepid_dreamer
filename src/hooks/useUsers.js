import { useContext } from "react";
import UserContext from "../Context/UserContext";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  return {
    user,
    setUser,
  };
};

export default useUser;
