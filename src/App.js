import React, {Component} from 'react';
import {connect} from 'react-redux';
import Searchbox from './Searchbox.js';
import Cardlist from './Cardlist.js';
import Scroll from './Scroll.js';

import {setSearchField, requestRobots} from './actions';

const mapStateToProps = (state) => {
  return{
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event)=>{dispatch(setSearchField(event.target.value))},
    onRequestRobots: ()=>{requestRobots(dispatch)}
  }
}

class App extends Component {

  componentDidMount(){
    this.props.onRequestRobots()
    console.log(this.props.store.getState())
  }

  render(){

    const filteredRobots = this.props.robots.filter((data,index)=>{
      return data.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })

    return(
      <div className={`tc`}>
        <h1 className={`f1`}>{`robofriends`}</h1>
        <Searchbox onSearchChange={this.props.onSearchChange}/>
        <Scroll>
          <Cardlist robots={filteredRobots}/>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
