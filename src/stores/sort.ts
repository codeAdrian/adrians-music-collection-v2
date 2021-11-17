import { writable } from 'svelte/store';

export const sortBy = writable<SortBy>('artist');

export const sortDirection = writable<SortDirection>('asc');
