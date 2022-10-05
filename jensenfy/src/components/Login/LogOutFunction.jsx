import axios from "./api/axios";
import LogOutAuth from "./LogOutAuth"

const LogOutFunction = () => {
  const { setAuth } = LogOutAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios('/logout', {
        withCredentials: true
      });
    } catch (err) {
      console.error(err);
    }
  }

  return logout;
}

export default LogOutFunction