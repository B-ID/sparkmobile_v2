import { View, Text } from 'react-native';
import { withPartnerConnect } from '@/components/HOCs/with-partner-connect';
import { withPremiumAccess } from '@/components/HOCs/with-premium-access';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Chat screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default withPartnerConnect(ChatScreen);
