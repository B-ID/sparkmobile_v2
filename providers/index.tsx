import { buildProvidersTree } from "@/utils/buildProvidersTree";
import { TanStackProvider } from "@/providers/tanstack-provider";
import { PremiumProvider } from "@/providers/premium-provider";
import { AppThemeProvider } from "@/providers/theme-provider";
import { AuthProvider } from "@/providers/auth-provider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreehController from "./splashscreen-controller";

const ProviderTree = buildProvidersTree([
  [GestureHandlerRootView],
  // [SplashScreehController],
  [TanStackProvider],
  [PremiumProvider],
  [AppThemeProvider],
  [AuthProvider],
]);

export default ProviderTree;
