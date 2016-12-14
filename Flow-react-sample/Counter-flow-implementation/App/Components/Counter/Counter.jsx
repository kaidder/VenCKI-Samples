// @flow

import React from 'react';
import {connect} from 'react-redux';
import Titlebar from './titlebar.jsx';

type CounterProps = {
    offset: number;
    eventCallback?: (num: number, eventTime: Date) => void;

};

export default class Counter extends React.Component{

    props: CounterProps;
    static defaultProps: CounterProps;
    state: {
        counterValue: number
    };

    increment: () => {};
    decrement: () => {}
    
    constructor(props: CounterProps){
        super(props);
        this.state = {
            counterValue: 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        
    }

    increment(): void{
        this.setState({counterValue: this.state.counterValue + this.props.offset});

        if(this.props.eventCallback != null){
            this.props.eventCallback(this.state.counterValue, new Date());
        }
    }
    
    decrement(){
        this.setState({counterValue: this.state.counterValue - this.props.offset});

        if(this.props.eventCallback != null){
            this.props.eventCallback(this.state.counterValue, new Date());
        }
    }

    render(){        
        return <div>
            <Titlebar />
            <h1>{this.state.counterValue}</h1>
            <div><button className="btn btn-primary" onClick={this.increment}><strong>+</strong></button> 
            <span>&nbsp;</span>
            <button className="btn btn-primary" onClick={this.decrement} ><strong>-</strong></button></div>
        </div>
    }
}

Counter.defaultProps = {offset: 1};