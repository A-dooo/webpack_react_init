import React, { Component } from 'react';
import './index.css';
import {changeColor} from './action.js';
import { connect } from 'react-redux';
import {Link} from 'react-router';

@connect(state=>({
  color:state.Index.color
}),{
  changeColor
})
class Index extends Component {
  render() {
    return (
      <div className="App">
          {this.props.color}
          <button onClick ={()=>{
            this.props.changeColor('yellow')
          }}>click me</button>
          <Link to ={'/about'}>gogogo</Link>
      </div>
    );
  }
}

export default Index;
