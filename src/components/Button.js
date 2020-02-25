/**
 * Created by Rwaida on 26/02/2020.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor() {
    super();
  }

  render() {
    const {title, onClick} = this.props;
    return (
      <div>
        <button type="button"
                className={"button"}
                onClick={onClick}>{title}</button>
      </div>)

  }
}

Button.propTypes = {
title: PropTypes.string,
onClick: PropTypes.func,
};

export default Button;