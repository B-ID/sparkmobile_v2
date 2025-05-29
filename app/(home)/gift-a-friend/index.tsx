import React, { FC } from "react";
import { View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

type Props = {};

const GiftFriendScreen: FC<Props> = () => {
  return (
    <View>
      <ThemedText>Gift a friend</ThemedText>
    </View>
  );
};

export default GiftFriendScreen;
