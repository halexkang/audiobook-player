import unknownAuthorImage from '@/assets/images/unknown_author.png'
import unknownCoverImage from '@/assets/images/unknown_cover.png'
import { Image } from 'react-native'

export const unknownCoverImageUri = Image.resolveAssetSource(unknownCoverImage).uri
export const unknownAuthorImageUri = Image.resolveAssetSource(unknownAuthorImage).uri