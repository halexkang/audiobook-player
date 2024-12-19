import { colors } from "@/constants/constants";
import { unknownCoverImageUri } from "@/constants/images";
import { useLastActiveAudiobook } from "@/hooks/useLastActiveAudiobook";
import { defaultStyles } from "@/styles/styles";
import React from "react";
import { Text, TouchableOpacity, View, ViewProps } from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import { PlayPauseButton, Rewind30Button } from "./AudioPlayerControls";
export const MiniPlayer = ({ style }: ViewProps) => {
  const activeAudiobook = useActiveTrack();
  const lastActiveAudiobook = useLastActiveAudiobook();

  const displayedTrack = activeAudiobook ?? lastActiveAudiobook;
  if (!displayedTrack) return null;

  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.grayBackground,
          padding: 10,
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
          >
            {displayedTrack.title ?? ""}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
            marginRight: 16,
            paddingLeft: 16,
          }}
        >
          <Rewind30Button iconSize={22} />
          <PlayPauseButton iconSize={28} />
        </View>
      </>
    </TouchableOpacity>
  );
};
