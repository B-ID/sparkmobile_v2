import { Redirect, useFocusEffect, useRouter } from 'expo-router';
import React, { useCallback, useRef, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';

export const withPartnerConnect = (Component: React.ComponentType<any>) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    const router = useRouter();
    const hasPartnerConnected = false;

    // const goToConnectPartner = () => {
    //   // router.push('../connect-partner');
    //   router.replace({
    //     pathname: '/connect-partner',
    //     params: {Redirect}
    //   })
    // };

    //Todo => Create a local SQL database to store partner connection status and premium access.

    if (!hasPartnerConnected) {
      return <Redirect href={'/connect-partner'} />
    }



    // useEffect(() => {
    //   if (!hasPartnerConnected) {
    //     return <Redirect href="/connect-partner" />;
    //   }
    // }, [hasPartnerConnected]);


    return hasPartnerConnected ? <Component {...props} /> : null;
  };
};
