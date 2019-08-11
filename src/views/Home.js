import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import {Left, Right, Icon} from 'native-base';
import Navbar from "../components/Navbar";
import {connect} from 'react-redux';
import {watchPersonData} from "../actions"


class HomePage extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
            <Icon name="home" style={{fontSize: 24, color: tintColor}}/>
        )
    };

    constructor(props) {
        super(props);
        this.props.watchPersonData();
    }


    render() {
        return (
            <View style={styles.container}>
                <Navbar title='Home' navigation={this.props.navigation}/>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>Home Page</Text>
                    <Text>{this.props.personData.firstName}</Text>
                    <Text>{this.props.personData.lastName}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = (state) => {
    return {
        personData: state.firebase.personData
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        watchPersonData: () => dispatch(watchPersonData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);