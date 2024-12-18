export const audiobookFilter = (title: string) => (track: any) =>
	track.title?.toLowerCase().includes(title.toLowerCase())