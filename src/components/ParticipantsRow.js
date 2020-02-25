/**
 * Created by Rwaida on 26/02/2020.
 */
import React, {Component} from 'react';

class ParticipantsRow extends Component {
  constructor() {
    super();

  }
  render() {
    const {participant, handleChangeParticipant} = this.props
    return (
      <tr>
        <td>
            <input type="text"
                   className={'opacity'}
                   style={{width:"90%",padding:'0.5em',margin:'0.5em',textAlign:'center'}}
                   id="lname"
                   value={participant}
                   name="lname"
                   placeholder={"Type here"}
                   onChange={(e)=>{
                     handleChangeParticipant(e.target.value)}}
            />
        </td>
        <td className={'red'}/>
        <td className={'red'}/>
        <td className={'red'}/>
      </tr>
    )
  }
}

ParticipantsRow.propTypes = {

};

export default ParticipantsRow;