/**
 * Created by Rwaida on 26/02/2020.
 */

import React from "react";
import {createReducer} from "../index";
import {
  ADD_NEW_PARTICIPANT, CLEAR_DATA, GET_VENUES_LIST,
  UPDATE_PARTICIPANT_SELECTED_VENUE,
} from '../Constant';

const initialState = {
  participants : {},
  venues: [],
  votes: {}
};

function calculateVotes(participants,venueId) {
  let counter = 0
  Object.keys(participants).map((p)=>{
    if(participants[p] === venueId)
      counter+=1
  })
  return counter
}

export default createReducer(initialState, {
  [GET_VENUES_LIST]: (state, payload) => {
    let initVotes = state.votes
    payload.map((p)=>{
      initVotes[p.id] = 0
    })
    return Object.assign({}, state, {
      venues: payload,
      votes: initVotes
    });
  },
  [ADD_NEW_PARTICIPANT]: (state, payload) => {
    let NewParticipant = state.participants
    NewParticipant[payload] = null
    return Object.assign({}, state, {
      participants: NewParticipant
    });
  },
  [UPDATE_PARTICIPANT_SELECTED_VENUE]: (state, payload) => {
    let NewParticipant = Object.assign({}, state.participants)
    NewParticipant[payload.participant] = payload.venueId
    let updatedVotes = Object.assign({}, state.votes)
    state.venues.map(v=>{
      updatedVotes[v.id] = calculateVotes(NewParticipant,v.id)
    })
    return Object.assign({}, state, {
      participants: NewParticipant,
      votes: updatedVotes
    });
  },
  [CLEAR_DATA]: (state, payload) => {
    return Object.assign({}, state, {
      participants: {},
      votes: {},
      venues: []
    });
  },
})
