/**
 * Created by Rwaida on 26/02/2020.
 */
import React, {Component} from 'react';
import Button from "./Button";
import PropTypes from "prop-types";

class SearchSection extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      search: "10999 Berlin"
    }
  }
  render() {
    const { handelRequestData, handelClearDate } = this.props;
    return (
      <form className={'flex-div'}>
        <input type="text"
               id="searchId"
               value={this.state.search}
               name="search"
               className={'input'}
               placeholder="Search..."
               onChange={(e)=>{
                 this.setState({search:e.target.value},
                   ()=>{handelClearDate()})
               }}/>
        <div>
          <Button title={"Search"} onClick={()=>{
            handelRequestData(this.state.search) }}/>
        </div>
      </form>
    )
  }
}

SearchSection.propTypes = {
  handelClearDate: PropTypes.func,
  handelRequestData: PropTypes.func,
};

export default SearchSection;
