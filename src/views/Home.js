import React, {Component} from 'react';
import {Platform, View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {Left, Right, Icon} from 'native-base';
import {connect} from 'react-redux';
import {watchPersonData} from "../../redux/app-redux";


const mapStateToProps = (state) => {
    return {
        personData: state.personData
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        watchPersonData: () => dispatch(watchPersonData())
    };
}

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
                <Header
                    containerStyle={{marginTop: Platform.OS === 'ios' ? 0 : -24}}
                    placement="left"
                    leftComponent={{icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
                    centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);