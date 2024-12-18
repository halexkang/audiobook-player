import { unknownCoverImageUri } from "@/constants/images";
import { TouchableHighlight, View } from "react-native";
import FastImage from "react-native-fast-image";
import { StyleSheet, Text } from "react-native";
import { defaultStyles } from "@/styles/styles";
import { colors, fontSize } from "@/constants/constants";
import * as Progress from "react-native-progress";
import { Entypo } from "@expo/vector-icons";
import { ExtendedTrack } from "./AudiobookList";

export type AudiobookListItemProps = {
  track: ExtendedTrack
};

export default function AudiobookListItem({ track }: AudiobookListItemProps) {
  const isActiveTrack = false;
  const getRemainingTime = () => {
    if (!track.total) {
      return "N/A";
    }
    var curr = 0;
    if (track.current) {
      curr = track.current;
    }
    const remainingTime = track.total;
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    return `${hours}h ${minutes}m left`;
  };
  return (
    <TouchableHighlight>
      <View
        style={{
          flexDirection: "row",
          columnGap: 14,
          alignItems: "center",
          paddingRight: 20,
        }}
      >
        <View>
          <FastImage
            source={{
              uri: track.cover ?? unknownCoverImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              borderRadius: 8,
              width: 70,
              height: 70,
              opacity: isActiveTrack ? 0.6 : 1,
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
                maxWidth: "90%",
                color: isActiveTrack ? colors.primary : colors.text,
              }}
            >
              {track.title}
            </Text>
            {track.author && (
              <Text numberOfLines={1} style={styles.regularText}>
                {track.author}
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
                  track.total && track.current
                    ? Math.round((track.current / track.total) * 100) / 100
                    : 0
                }
                width={75}
                color={colors.primary}
              />
              <Text numberOfLines={1} style={styles.regularText}>
                {getRemainingTime()}
              </Text>
            </View>
          </View>
          <Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
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
