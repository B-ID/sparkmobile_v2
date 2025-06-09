import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

export const withPartnerConnect = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const hasPartnerConnected = false;

    const goToConnectPartner = () => {
      router.replace('../connect-partner');
    };

    //Todo => Create a local SQL database to store partner connection status and premium access.

    useEffect(() => {
      if (!hasPartnerConnected) {
        goToConnectPartner();
      }
    }, [hasPartnerConnected]);

    return hasPartnerConnected ? <Component {...props} /> : null;
  };
};
