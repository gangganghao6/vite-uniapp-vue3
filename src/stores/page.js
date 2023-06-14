// stores/page.js
import {defineStore} from 'pinia';

export const usePage = defineStore('page', {
    state: () => ({page: 1}),
});