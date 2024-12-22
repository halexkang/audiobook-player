import { colors, fontSize } from "@/constants/constants";
import { unknownCoverImageUri } from "@/constants/images";
import { defaultStyles } from "@/styles/styles";
import { Entypo, FontAwesome6 } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import * as Progress from "react-native-progress";
import TrackPlayer, {
  useActiveTrack,
  useIsPlaying,
} from "react-native-track-player";
import { Audiobook } from "./AudiobookList";

export type AudiobookListItemProps = {
  audiobook: Audiobook;
};

export default function AudiobookListItem({
  audiobook,
}: AudiobookListItemProps) {
  const isActive = useActiveTrack()?.url === audiobook.url;
  const { playing } = useIsPlaying();

  const handleSelect = async (audiobook: Audiobook) => {
    if (isActive && playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.load(audiobook);
      await TrackPlayer.play();
    }
  };

  const getRemainingTime = () => {
    if (!audiobook.total) {
      return "N/A";
    }
    var curr = 0;
    if (audiobook.current) {
      curr = audiobook.current;
    }
    const remainingTime = audiobook.total;
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    return `${hours}h ${minutes}m left`;
  };
  return (
    <TouchableHighlight onPress={() => handleSelect(audiobook)}>
      <View
        style={{
          flexDirection: "row",
          columnGap: 20,
          alignItems: "center",
        }}
      >
        <View>
          <FastImage
            source={{
              uri: audiobook.cover ?? unknownCoverImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              borderRadius: 8,
              width: 70,
              height: 70,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <View style={{ width: "100%" }}>
            <Text
              numberOfLines={2}
              style={{
                ...defaultStyles.text,
                fontSize: fontSize.sm,
                fontWeight: "600",
                color: colors.text,
              }}
            >
              {audiobook.title}
            </Text>
            {audiobook.author && (
              <Text numberOfLines={1} style={styles.regularText}>
                {"By " + audiobook.author}
              </Text>
            )}
            <View
              style={{
                flexDirection: "row",
                columnGap: 14,
                alignItems: "center",
              }}
            >
              <Progress.Bar
                progress={
                  audiobook.total && audiobook.current
                    ? Math.round((audiobook.current / audiobook.total) * 100) /
                      100
                    : 0
                }
                width={75}
                color={colors.primary}
                borderWidth={0}
                unfilledColor={colors.grayBackground}
              />
              <Text numberOfLines={1} style={styles.regularText}>
                {getRemainingTime()}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            columnGap: 16,
          }}
        >
          <FontAwesome6
            name={isActive && playing ? "circle-pause" : "circle-play"}
            size={22}
            color={colors.text}
          />
          <Entypo name="dots-three-horizontal" size={22} color={colors.icon} />
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  regularText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
  },
});
