import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';
import HomePage from './src/views/Home';
import SettingsPage from './src/views/Settings';
import NotificationPage from './src/views/Notifications';
import NewsPage from './src/views/News';
import {Provider} from 'react-redux'
import {store} from './src/index';
import * as firebase from "firebase";

const {width} = Dimensions.get("window");

firebase.initializeApp(firebaseConfig);

const CustomDrawerNavigation = (props) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, backgroundColor: '#d2d2d2', opacity: 0.9}}>
                <View style={{height: 100, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('./src/assets/images/no-image.png')}
                           style={{height: 150, width: 150, borderRadius: 60}}/>
                </View>
                <View style={{height: 50, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center'}}>
                    <Text>John Doe</Text>
                </View>
            </View>
            <ScrollView>
                <DrawerItems {...props} />
            </ScrollView>
            <View style={{alignItems: "center", bottom: 20}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'column', marginRight: 15}}>
                        <Icon name="flask" style={{fontSize: 24}} onPress={() => console.log("Tıkladın")}/>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Icon name="call" style={{fontSize: 24}} onPress={() => console.log("Tıkladın")}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator({
        Home: {
            screen: HomePage,
            navigationOptions: {
                title: 'Homepage'
            }
        },
        Settings: {
            screen: SettingsPage,
            navigationOptions: {
                title: 'Settings'
            }
        },
        Notifications: {
            screen: NotificationPage,
            navigationOptions: {
                title: 'Notifications'
            }
        },
        News: {
            screen: NewsPage,
            navigationOptions: {
                title: 'News'
            }
        }
    },
    {
        drawerPosition: 'left',
        contentComponent: CustomDrawerNavigation,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        drawerWidth: (width / 3) * 2
    });

const AppContainer = createAppContainer(Drawer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        )
    }
}

