export const audiobookFilter = (query: string) => (track: any) =>
  track.title?.toLowerCase().includes(query.toLowerCase()) ||
  track.author?.toLowerCase().includes(query.toLowerCase());
