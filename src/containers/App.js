import React , { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/errorBoundaries";
import { connect } from "react-redux";
import './App.css';

import {setSearchField} from "../actions";

const mapStateToProps = (state) => {
    return{
        searchField: state.searchField,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        onSearchChange: (event)=>{
            dispatch(setSearchField(event.target.value))
        }
    }
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots : [],
            // searchField: '', // We can remove this because redux takes care of it
        }
    }
    componentDidMount(){
        // console.log(this.props.store.getState()); // This was used to get the state of the store
        
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json()
        })
        .then((users)=>{
            this.setState({robots: users});
        })
    }
    // onSearchChange = (event) => {
    //     this.setState({ searchField: event.target.value})
    // } // We can remove this because redux takes care of it
    render(){
        const {robots, /*searchField /* this has been taken care of by redux */} = this.state
        const {searchField, onSearchChange} = this.props
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
         return !robots.length ?
             <h1 className="f1 tc">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
                )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
