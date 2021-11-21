import { writable } from 'svelte/store';

export const activePage = writable(1);

export const sortBy = writable<SortBy>('artist');

export const sortDirection = writable<SortDirection>('asc');
