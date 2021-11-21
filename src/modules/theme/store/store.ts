import { getTheme } from 'src/utils/getTheme';
import { writable } from 'svelte/store';

export const theme = writable(getTheme() || '');
