import { FlatList, FlatListProps, Text, View } from 'react-native'
import AudiobookListItem from "./AudiobookListItem";
import { utilsStyles } from '@/styles/styles';

export type AudiobookListProps = Partial<FlatListProps<unknown>> & {
    tracks: any[]
}

const Divider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 75 }} />
)

export default function AudiobookList({tracks, ...audiobookListProbs}: AudiobookListProps ) {
    return(
        <FlatList 
        data={tracks} 
        contentContainerStyle={{paddingTop: 10, paddingBottom: 130 }}
        ItemSeparatorComponent={Divider}
        renderItem={({ item: track }) => (
            <AudiobookListItem track={{...track, image: track.cover}} />
        )} 
        {...audiobookListProbs}/>
    )
}