import { FC, PropsWithChildren, useEffect } from "react";
import { useRouter } from "expo-router";

type AuthProviderProps = PropsWithChildren;

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();

  const isTokenValid = false;

  //Todo => check there's a valid token
  const goToLogin = () => {
    router.replace("/");
  };

  useEffect(() => {
    if (!isTokenValid) {
      goToLogin();
    }
  }, [isTokenValid]);

  return <>{children}</>;
};
