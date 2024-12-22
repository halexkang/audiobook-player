import { utilsStyles } from "@/styles/styles";
import { FlatList, FlatListProps, Text, View } from "react-native";
import { Track } from "react-native-track-player";
import AudiobookListItem from "./AudiobookListItem";

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
        <AudiobookListItem audiobook={audiobook} />
      )}
      {...audiobookListProbs}
    />
  );
}
