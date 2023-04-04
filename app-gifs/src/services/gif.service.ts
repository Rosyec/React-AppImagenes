import axios from 'axios';

export const API_KEY: string = 'C_9AXZHwVEwr8nZE27HJ5B50wGT5_2Zs2fzwaplksSU'
export const imagesApi = axios.create({baseURL: 'https://api.unsplash.com/search/photos'});