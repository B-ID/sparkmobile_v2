import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';
import { Button, View } from 'react-native';

const ConnectPartnerScreen = () => {
  return (
    <View>
      <ThemedText>connect partner screen</ThemedText>
      <Link asChild href="/">
        <Button title="go home" />
      </Link>
    </View>
  );
};

export default ConnectPartnerScreen;
