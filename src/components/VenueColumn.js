/**
 * Created by Rwaida on 26/02/2020.
 */
import React, {Component} from 'react';

class VenueColumn extends Component {
  constructor() {
    super();
  }

  render() {
    const {venue,votes} = this.props;
    return (
      <th key={venue.id} className={'center venue-column'}>
        <div>
          {/*<a href={venue.url}>*/}
            <h3>{venue.name}</h3>
          {/*</a>*/}
          {venue.categories.map(c=>{
            return <p className={'opacity'}>{c.name+" "}</p>
          })}
          <h5>{votes[venue.id]}</h5>
        </div>
      </th>)

  }
}

VenueColumn.propTypes = {};
export default VenueColumn;

