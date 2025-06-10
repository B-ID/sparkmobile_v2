import { Stack } from 'expo-router';
import React from 'react';

type Props = {};

const ModalLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen options={{}} name="paywall" />
      <Stack.Screen options={{}} name="connect-partner" />
    </Stack>
  );
};

export default ModalLayout;
