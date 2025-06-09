import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const ConnectPartnerScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Button title={'go back'} onPress={() => router.dismiss()} />
      <Text>Connect partner screen</Text>
    </View>
  );
};

export default ConnectPartnerScreen;
