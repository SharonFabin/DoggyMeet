import React, {Component} from 'react';
import {Platform, Text} from "react-native";
import {Header} from 'react-native-elements';

class Navbar extends Component {

    render() {
        return (
            <Header
                containerStyle={{marginTop: Platform.OS === 'ios' ? 0 : -24}}
                placement="left"
                leftComponent={{icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
                centerComponent={{text: this.props.title, style: {color: '#fff'}}}
                rightComponent={{icon: 'home', color: '#fff'}}
            />
        );
    }
}

export default Navbar;