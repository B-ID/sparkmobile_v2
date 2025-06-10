import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';

const PaywallScreen = () => {
  return (
    <View>
      <ThemedText>Paywall Screen</ThemedText>
      <Link asChild href="/">
        <Button title="go home" />
      </Link>

    </View>
  );
};

export default PaywallScreen;
