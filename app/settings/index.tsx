import { View, Text } from 'react-native';
import React from 'react';
import { withPremiumAccess } from '@/components/HOCs/with-premium-access';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {};

const SettingsScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  );
};

export default withPremiumAccess(SettingsScreen);
