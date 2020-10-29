import React, { createContext, useCallback, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/modules/auth/actions';

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signUp(data: SignupData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<AuthState>(() => {
    const userStoraged = localStorage.getItem('@Wowflix:user');

    if (userStoraged) {
      const user = JSON.parse(userStoraged);
      dispatch(loadUser(user));
    }

    return {} as AuthState;
  });

  const signUp = useCallback(
    (user: User) => {
      localStorage.setItem('@Wowflix:user', JSON.stringify(user));

      setData({ user });
    },
    [setData],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signUp,
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
