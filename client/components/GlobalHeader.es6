import Bemmer from 'bemmer';
import React from 'react';
import { connect } from 'react-redux';

export const GlobalHeader = React.createClass({
  render() {
    const b = Bemmer.create('globalHeader', this.props.className);

    return (
      <div className={b()}>
        <div className={b('__rightMenu')}>

        </div>
      </div>
    );
  },
});

export default connect(state => {
  return {};
})(GlobalHeader);
