import { createContext, useState, useEffect } from "react";

import api from "../services/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { setToken } from "../helpers/setToken";

const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setToken();

    const localStorageUser = localStorage.getItem("user");

    if (localStorageUser) {
      setUser(JSON.parse(localStorageUser));
      setIsAuthenticated(true);
    }
  }, []);

  const registerUser = async (userData) => {
    api
      .post("/user/register", userData)
      .then((res) => {
        setIsAuthenticated(true);
        setUser(res.data);

        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/dashboard");
      })
      .catch((error) => {
        setIsAuthenticated(false);
        setApiError(error.response.data);
        console.log(apiError);
      });
  };

  const loginUser = async (userData) => {
    api
      .post("/user/login", userData)
      .then((res) => {
        Cookies.set("token", res.data.token, { expires: 1 });
        setIsAuthenticated(true);
        setApiError(null);
        setUser(res.data);

        localStorage.setItem("user", JSON.stringify(res.data));

        navigate("/dashboard");
      })
      .catch((error) => {
        setIsAuthenticated(false);
        setApiError(error.response.data);
      });
  };

  const logoutUser = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);

    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        apiError,
        isAuthenticated,
        setUser,
        registerUser,
        loginUser,
        setApiError,
        logoutUser,
        setIsAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
