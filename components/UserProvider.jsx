import React, { useState, useEffect } from "react";
import useAxios from "axios-hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

import UserContext from "../context/userContext";

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const USER_ID_STORAGE_KEY = "@user_id";

  // Read storage on load, look for signed in user
  useEffect(() => {
    AsyncStorage.getItem(USER_ID_STORAGE_KEY).then(setUserId);
  }, []);

  // Save in storage when id changes
  useEffect(() => {
    if (userId == null) {
      AsyncStorage.removeItem(USER_ID_STORAGE_KEY);
    } else {
      AsyncStorage.setItem(USER_ID_STORAGE_KEY, userId);
    }
  }, [userId]);

  const [{ data: userObject, loading }] = useAxios(`/api/users/${userId}`);
  const contextValue = [
    userObject !== "" ? { id: userId, ...userObject } : null,
    setUserId,
  ];

  return (
    <UserContext.Provider value={contextValue}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export default UserProvider;
