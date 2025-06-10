import { usePremium } from '@/providers/premium-provider';
import { useFocusEffect, useRouter } from 'expo-router';
import React from 'react';

export const withPremiumAccess = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const { isPremium } = usePremium();

    //Todo => Create a local SQL database to store partner connection status and premium access.

    useFocusEffect(() => {
      if (!isPremium) {
        router.replace('/paywall');
      }
    });

    return isPremium ? <Component {...props} /> : null;
  };
};
