import {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const login = (user) => {
    localStorage.setItem('user', user);
    setUser(localStorage.getItem('user'));
  };
  const logout = () => {
    const user = localStorage.removeItem('user');
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
