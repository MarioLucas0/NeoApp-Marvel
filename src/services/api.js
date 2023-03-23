import axios from "axios";

export const api = axios.create({
  baseURL: "https://gateway.marvel.com",
  params: {
    "apikey": '6872c6fb49d711c3faa4d389a4399087',
    "ts": '1679551110177',
    "hash": '91e5dc9c8c3d7a88fd5221ef9b32bfc0'
  },
});  