export const parseArtistsNames = (artists: { name: string }[]): string =>
  artists.map(({ name }) => name.replace(/\s\(.\d?\)/, '')).join(', ');
