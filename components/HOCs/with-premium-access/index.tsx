import React, { useEffect } from 'react';
import { usePremium } from '@/providers/premium-provider';
import { useRouter } from 'expo-router';

export const withPremiumAccess = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const { isPremium } = usePremium();

    const gotToPaywall = () => {
      router.replace('/paywall');
    };

    //Todo => Create a local SQL database to store partner connection status and premium access.

    useEffect(() => {
      if (!isPremium) {
        gotToPaywall();
      }
    }, [isPremium]);

    return isPremium ? <Component {...props} /> : null;
  };
};
