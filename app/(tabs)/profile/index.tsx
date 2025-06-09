import { withPremiumAccess } from '@/components/HOCs/with-premium-access';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
};

// export default ProfileScreen;
export default withPremiumAccess(ProfileScreen);
