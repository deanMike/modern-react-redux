import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Uh4C0niKlCRNzhNH-jw6Jaygri3FmjN0HDjC5Wuh7zY',
  },
});
