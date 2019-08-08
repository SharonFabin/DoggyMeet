import React, {Component} from 'react';
import {Text} from "react-native";

class Blink extends Component {

    componentDidMount() {
        // Toggle the state every second
        setInterval(() => (
            this.setState(previousState => (
                {isShowingText: !previousState.isShowingText}
            ))
        ), 1000);
    }

    //state object
    state = {isShowingText: true};

    render() {
        if (!this.state.isShowingText) {
            return (
                <Text>Hav</Text>
            );
        }

        return (
            <Text>{this.props.text} : {this.state.isShowingText}</Text>
        );
    }
}

export default Blink;