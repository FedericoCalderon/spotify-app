import axios from 'axios';
import env from 'react-dotenv';

export const GET_SONG_BY_QUERY = "GET_SONG_BY_QUERY";

const client_id = env.CLIENT_ID; // client id
const client_secret = env.CLIENT_SECRET; // secret

export function setUp() {
  return axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(client_id + ':' + client_secret)      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
}

export function getSongByQuery(search) {
  return (dispatch) => {
    setUp()
    .then(tokenResponse => {
    axios(`https://api.spotify.com/v1/search?q=name:${search}&type=track`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
      })
      .then (genreResponse => {
        dispatch ({
          type: GET_SONG_BY_QUERY,
          payload: genreResponse.data.tracks.items
        })
      });
    });
  }
};