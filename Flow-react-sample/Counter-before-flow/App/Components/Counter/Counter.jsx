import React from 'react';
import {connect} from 'react-redux';
import Titlebar from './titlebar.jsx';

export default class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            counterValue: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        
    }

    increment(){
        this.setState({counterValue: this.state.counterValue + this.props.offset});
    }
    
    decrement(){
        this.setState({counterValue: this.state.counterValue - this.props.offset});
    }

    render(){
        console.log(this.props.offset);
        return <div>
            <Titlebar />
            <h1>{this.state.counterValue}</h1>
            <div><button className="btn btn-primary" onClick={this.increment}><strong>+</strong></button> 
            <span>&nbsp;</span>
            <button className="btn btn-primary" onClick={this.decrement} ><strong>-</strong></button></div>
        </div>
    }
}

Counter.defaultProps = {
    offset: 1
};

Counter.propTypes = {
    offset: React.PropTypes.number
};