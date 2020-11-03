import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/modules/auth/actions';

interface User {
  name: string;
  email: string;
  password: string;
  is_online: boolean;
}

interface AuthState {
  user: User;
}

interface AuthContextData {
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const user = localStorage.getItem('@Wowflix:user');
  const dispatch = useDispatch();

  const [data, setData] = useState<AuthState>(() => {
    if (user) {
      dispatch(loadUser(JSON.parse(user)));

      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  useEffect(() => {
    if (user) {
      setData(JSON.parse(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
