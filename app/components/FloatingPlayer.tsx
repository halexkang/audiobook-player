import { defaultStyles } from "@/styles/styles";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import FastImage from "react-native-fast-image";
import { useActiveTrack } from "react-native-track-player";
import { unknownCoverImageUri } from "@/constants/images";
import { PlayPauseButton, Rewind30Button } from "./AudioPlayerControls";
import React from "react";
import { useLastActiveAudiobook } from "@/hooks/useLastActiveAudiobook";
export const FloatingPlayer = ({ style }: ViewProps) => {
  const activeAudiobook = useActiveTrack();
  const lastActiveAudiobook = useLastActiveAudiobook();

  const displayedTrack = activeAudiobook ?? lastActiveAudiobook;
  if (!displayedTrack) return null;

  return (
    <TouchableOpacity style={[styles.container, style]}>
      <>
        <FastImage
          source={{
            uri: displayedTrack.cover ?? unknownCoverImageUri,
          }}
          style={styles.trackArtworkImage}
        />
        <View style={styles.trackTitleContainer}>
          <Text style={styles.trackTitle}>{displayedTrack.title ?? ""}</Text>
        </View>
        <View style={styles.trackControlsContainer}>
          <Rewind30Button iconSize={22} />
          <PlayPauseButton iconSize={28} />
        </View>
      </>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 10,
  },
  trackArtworkImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  trackTitleContainer: {
    flex: 1,
    overflow: "hidden",
    marginLeft: 10,
  },
  trackTitle: {
    ...defaultStyles.text,
    fontSize: 18,
    fontWeight: "600",
    paddingLeft: 10,
  },
  trackControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    marginRight: 16,
    paddingLeft: 16,
  },
});
