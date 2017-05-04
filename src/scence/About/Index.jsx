import React, { Component } from 'react';
import {qryAboutList} from './action.js';
import {connect} from 'react-redux';

@connect(state=>({
  color:state.Index.color,
  list:state.About.list
}),{
  qryAboutList
})
class About extends Component {
  componentDidMount(){
    this.props.qryAboutList();
  }
  render() {
    const {list} = this.props;
    console.log(this.props);
    return (
      <div className="App">
        {this.props.color}
        <div>
          {
            list.map(item=>{
              return <div key ={item._id}>{item.title}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default About;
