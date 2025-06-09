import { useRouter } from "expo-router";
import { usePremium } from "@/providers/premium-provider";

export const useRequirePremium = () => {
  const { isPremium } = usePremium();
  const router = useRouter();

  const requirePremium = (onAllowed: () => void) => {
    if (isPremium) {
      onAllowed();
    } else {
      router.push("/paywall");
    }
  };

  return { requirePremium };
};
