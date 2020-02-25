import React, { Component } from 'react';
import SearchSection from "../../components/SearchSection";
import VenueList from "../../components/VenueList";
import Button from "../../components/Button";
import {connect} from "react-redux";
import {fetchData, handleUpdateRedux} from '../../store/actions';
import {
  ADD_NEW_PARTICIPANT,
  CLEAR_DATA,
  UPDATE_PARTICIPANT_SELECTED_VENUE,
} from '../../store/Constant';


class LunchVenuePage extends Component {
  constructor() {
    super();
    this.state = {
      participant:""
    }
  }

  componentWillMount(){
    this._handelRequestData("10999 Berlin")
  }

  _handelRequestData= (search) => {
    const {fetchData} = this.props;
    fetchData(search)
  }

  _handelClearDate= () => {
    this.props.handleUpdateRedux(CLEAR_DATA)
  }

  _handleChangeParticipant= (value) => {
    this.setState({participant:value})
  }

  _handleAddNewParticipant= () => {
    this.props.handleUpdateRedux(ADD_NEW_PARTICIPANT,this.state.participant)
    this.setState({participant:""})
  }

  _handleSelectVenue= ( participant, venueId ) => {
    this.props.handleUpdateRedux(UPDATE_PARTICIPANT_SELECTED_VENUE,
      {participant: participant,venueId: venueId})
  }


  render() {
    const {participant} = this.state;
    const {venues,participants, votes} = this.props;
    return (
      <div className={'App'}>
        <h1>Lunchplace</h1>
        <SearchSection handelRequestData={this._handelRequestData}
                       handelClearDate={this._handelClearDate}/>
          <div className={'venue-list'}>
            <VenueList venues={venues}
                       votes={votes}
                       participant={participant}
                       participantsList={participants}
                       handleSelectVenue={this._handleSelectVenue}
                       handleChangeParticipant={this._handleChangeParticipant}/>
          </div>
        <Button title={"Add participant"}
                onClick={this._handleAddNewParticipant}/>
      </div>
    );
  }
}

const mapStateTopProps = (state)=>({
  votes: state.venue.votes,
  venues: state.venue.venues,
  participants: state.venue.participants
})

const mapDispatchToProps = (dispatch) => ({
  fetchData(query,type) {
    dispatch(fetchData(query,type));
  },
  handleUpdateRedux(query,type) {
    dispatch(handleUpdateRedux(query,type));
  },
});

export default connect(mapStateTopProps, mapDispatchToProps)(LunchVenuePage);
