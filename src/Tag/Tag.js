import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {
  static SUCCESS = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,x';

  state = {
    board: Tag.SUCCESS.split(',').sort((a,b) => (Math.random() - 0.5))

  }

  renderItem = (num, idx) => {
    if (num === 'x') {
      return null;
    }

    const ROWS = Math.floor(idx/4);
    const CELL = idx%4;

    return <li
      key={num}
      onClick={this.clickCurrent(num,idx)}
      className="tagNumber"

      style={{
        transform: `translateX(${CELL*100}%) translateY(${ROWS*100}%)`
      }}>
      {num}
    </li>;
  }

  clickCurrent = (num,idx) => {
    return e => {
      console.log(num,idx);
    }
  }

  render() {
    console.log(this.state);
    const {board} = this.state;
  
    return (
      <ul className="wrapperTag">
        {board.map(this.renderItem)}
      </ul>
    );
  }
}

export default Tag;
