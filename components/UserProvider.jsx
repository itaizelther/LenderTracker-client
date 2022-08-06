import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserContext from "../context/userContext";

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  // Read storage on load, look for signed in user
  useEffect(() => {
    AsyncStorage.getItem("@user_id").then(setUserId);
  }, []);

  const [{ data: userObject }] = useAxios(`/api/users/${userId}`);
  const contextValue = [userObject !== "" ? userObject : null, setUserId];

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
