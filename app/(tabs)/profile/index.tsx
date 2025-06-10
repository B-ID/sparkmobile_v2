import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ScrollView,View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{flex: 1}}>
        <View style={{}}>
          <ThemedText>Profile screen</ThemedText>
          <ThemedText>Profile screen</ThemedText>
          <ThemedText>Profile screen</ThemedText>
          <ThemedText>Profile screen</ThemedText>
          <ThemedText>Profile screen</ThemedText>
          <ThemedText>Profile screen</ThemedText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
