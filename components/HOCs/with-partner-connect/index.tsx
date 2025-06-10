import { useFocusEffect, useRouter } from 'expo-router';
import React from 'react';

export const withPartnerConnect = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const hasPartnerConnected = false;

    //Todo => Create a local SQL database to store partner connection status and premium access.

    useFocusEffect(() => {
      if (!hasPartnerConnected) {
        router.replace('/connect-partner');
      }
    });

    return hasPartnerConnected ? <Component {...props} /> : null;
  };
};
