import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { FC, PropsWithChildren } from "react";

type AppThemeProps = PropsWithChildren;

export const AppThemeProvider: FC<AppThemeProps> = (props) => {
  const { children } = props;

  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );
};
