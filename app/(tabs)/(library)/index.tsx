import AudiobookList from "@/app/components/AudiobookList";
import { screenPadding } from "@/constants/constants";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import { defaultStyles } from "@/styles/styles";
import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import library from "@/assets/data/library.json";
import { audiobookFilter } from "@/utils/filter";

export default function LibraryScreen() {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find audiobooks",
    },
  });
  const filterAudiobooks = useMemo(() => {
    if (!search) {
      return library;
    }
    return library.filter(audiobookFilter(search));
  }, [search]);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={[
        defaultStyles.container,
        { paddingHorizontal: screenPadding.horizontal },
      ]}
    >
      <AudiobookList tracks={filterAudiobooks} scrollEnabled={false} />
    </ScrollView>
  );
}
