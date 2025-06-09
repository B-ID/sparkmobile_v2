import { withPartnerConnect } from '@/components/HOCs/with-partner-connect';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Chat screens</Text>
      </View>
    </SafeAreaView>
  );
};

export default withPartnerConnect(ChatScreen);
