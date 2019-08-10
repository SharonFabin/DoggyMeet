import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';


class NotificationPage extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="notifications" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={{marginTop: Platform.OS === 'ios' ? 0 : - 24}}
                    placement="left"
                    leftComponent={{icon: 'menu', color: '#fff', onPress: () => this.props.navigation.openDrawer()}}
                    centerComponent={{text: 'MY TITLE', style: {color: '#fff'}}}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Notification Page</Text>
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

export default NotificationPage;