import {
  GET_VENUES_LIST,
} from './Constant';

export const CLIENT_ID = "VSB5U2RJ0KTESAGF3PK3ZEY1RB3NIWVCYSWCZL3EWJHNLX4T";
export const CLIENT_SECRET = "SXME2TGB1XBD01WYSUOS1TRFSPIYGNPFIIZQXLH2QB3AGDF5";
const API = "https://api.foursquare.com/v2/venues/"
const ClientInfo =  "?client_id="+CLIENT_ID+"&client_secret="+CLIENT_SECRET;

export function fetchData(searchText) {
  let searchTextApi = API+"search"+ClientInfo+"&query=lunch &near="+searchText+"&v=20190724&limit=3"
  return  dispatch => {
    fetch(searchTextApi)
    .then(response => response.json())
    .then(venues => {
      dispatch({
        type: GET_VENUES_LIST,
        payload: venues.response.venues
      })
    }).catch(error => {
      console.log('error',error)
    });
  }

}
export function handleUpdateRedux(type, data) {
  return {
    type: type,
    payload: data
  };
}