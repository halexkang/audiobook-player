import { FlatList, FlatListProps, Text, View } from "react-native";
import AudiobookListItem from "./AudiobookListItem";
import { utilsStyles } from "@/styles/styles";
import TrackPlayer, { Track } from "react-native-track-player";

export type Audiobook = Track & {
  cover?: string;
  total?: number;
  current?: number;
};

export type AudiobookListProps = Partial<FlatListProps<Audiobook>> & {
  audiobooks: Audiobook[];
};

const Divider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 75 }}
  />
);

export default function AudiobookList({
  audiobooks,
  ...audiobookListProbs
}: AudiobookListProps) {
  const handleSelect = async (audiobook: Audiobook) => {
    await TrackPlayer.load(audiobook);
    await TrackPlayer.play();
  };
  return (
    <FlatList
      data={audiobooks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 130 }}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={
        <View>
          <Text style={utilsStyles.emptyContentText}>No audiobooks found</Text>
        </View>
      }
      renderItem={({ item: audiobook }) => (
        <AudiobookListItem audiobook={audiobook} onSelect={handleSelect} />
      )}
      {...audiobookListProbs}
    />
  );
}
