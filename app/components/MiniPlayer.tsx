import { colors, screenPadding } from "@/constants/constants";
import { unknownCoverImageUri } from "@/constants/images";
import { useLastActiveAudiobook } from "@/hooks/useLastActiveAudiobook";
import { defaultStyles } from "@/styles/styles";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View, ViewProps } from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import { PlayPauseButton, RewindButton } from "./AudioPlayerControls";
export const MiniPlayer = ({ style }: ViewProps) => {
  const router = useRouter();
  const activeAudiobook = useActiveTrack();
  const lastActiveAudiobook = useLastActiveAudiobook();

  const displayedTrack = activeAudiobook ?? lastActiveAudiobook;
  if (!displayedTrack) return null;

  const handlePress = () => {
    router.navigate("/MainPlayer");
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.grayBackground,
          paddingVertical: 10,
          paddingHorizontal: screenPadding.horizontal + 10,
        },
        style,
      ]}
    >
      <>
        <FastImage
          source={{
            uri: displayedTrack.cover ?? unknownCoverImageUri,
          }}
          style={{ width: 40, height: 40, borderRadius: 8 }}
        />
        <View style={{ flex: 1, overflow: "hidden", marginLeft: 10 }}>
          <Text
            style={{
              ...defaultStyles.text,
              fontSize: 18,
              fontWeight: "600",
              paddingLeft: 10,
            }}
            numberOfLines={1}
          >
            {displayedTrack.title ?? ""}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
          }}
        >
          <RewindButton iconSize={22} />
          <PlayPauseButton iconSize={28} />
        </View>
      </>
    </Pressable>
  );
};
