import { createContext, useState, useEffect } from "react";
import { onAuthChangeHandler, createUserDocument } from "../util/models/user";
const defaultValue = {
  currentUser: null,
  setCurrentUser: () => null,
};
export const userContext = createContext(defaultValue);

export const UserContextProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthChangeHandler(async (user) => {
      setCurrentUser(user);
      if (user) {
        await createUserDocument(user);
      }
    });
    return unsubscribe;
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
