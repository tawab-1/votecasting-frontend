import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(localStorage.getItem('token'));
  const login = (user) => {
    localStorage.setItem('token', user);
    setUser(localStorage.getItem('token'));
  };
  const logout = () => {
    const user = localStorage.removeItem('token');
    setUser(user);
  };
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
