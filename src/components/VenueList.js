/**
 * Created by Rwaida on 26/02/2020.
 */
import React, {Component} from 'react';
import VenueColumn from "./VenueColumn";
import ParticipantsRow from './ParticipantsRow';

class VenueList extends Component {
  constructor() {
    super();
  }

  _renderTableBody = () =>{
    const {
      venues,
      participantsList,
      handleSelectVenue} = this.props;
    return Object.keys(participantsList).map(participant =>{
      return(
        <tr>
          <td className={'opacity'}
              style={{padding:'0.5em',margin:'0.5em',textAlign:'center'}}>
            <div className={'name-div'}>{participant}</div>
          </td>
          {venues.map(v=>{
            if(participantsList[participant] === v.id){
              return <td className={'green'}
                         onClick={()=>{handleSelectVenue(participant,v.id)}}>
                <div style={{color:'#fff',testAlign:'center',fontSize:20,border:'none'}}>&#10004;</div>
              </td>
            }else{
              return <td className={'red'} onClick={()=>{handleSelectVenue(participant,v.id)}}/>
            }
          })}
        </tr>)
    })
  }

  render() {
    const {venues,
      votes,
      participant,
      handleChangeParticipant,
     } = this.props;

    return (
      <table>
        <tr>
          <th className={'participates'}>
            <div style={{textAlign:'center'}}>
              <h4>Participants</h4>
            </div>
          </th>
          {venues !== undefined ?
            venues.map(venue =>{
              return(
                <VenueColumn venue={venue} votes={votes}/>
              )
            }):null}
        </tr>
        {this._renderTableBody()}
        <ParticipantsRow participant={participant}
                         handleChangeParticipant={handleChangeParticipant}/>
      </table>
    )
  }
}

VenueList.propTypes = {};
export default VenueList;