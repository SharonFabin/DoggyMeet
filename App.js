import React, {Component} from 'react';
import {PermissionsAndroid, Text, View, TouchableOpacity} from 'react-native';
import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import FetchLocation from './components/FetchLocation';
import Map from './components/Map';
import Blink from './components/Blink';
import Geolocation from 'react-native-geolocation-service';

export async function requestLocationPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title': 'Example App',
                'message': 'Example App access to your location '
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location")
            alert("You can use the location");
        } else {
            console.log("location permission denied")
            alert("Location permission denied");
        }
    } catch (err) {
        console.warn(err)
    }
}

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', marginTop: 20}}>Home</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'Settings'
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={this.props.navigation.openDrawer}>
                    <Text>Open Drawer 1</Text>
                </TouchableOpacity>
                <Text style={{fontWeight: 'bold', marginTop: 20}}>Settings</Text>
            </View>
        );
    }
}

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        },

    }
);

const MainNavigator = createStackNavigator(
    {
        defaultHome: DrawerNavigator
    },
    {

        // /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(MainNavigator);

// export default class App extends Component {
//
//     componentDidMount() {
//         requestLocationPermission();
//     }
//
//
//     getUserLocation = () => {
//         Geolocation.getCurrentPosition(
//             (position) => {
//                 console.log(position);
//             },
//             (error) => {
//                 // See error code charts below.
//                 console.log(error.code, error.message);
//             },
//             {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000}
//         );
//     };
//
//     render() {
//         return (
//             <View>
//                 <Blink text='I love to blink'/>
//                 <Blink text='Yes blinking is so great'/>
//                 <Blink text='Why did they ever take this out of HTML'/>
//                 <Blink text='Look at me look at me look at me'/>
//                 <FetchLocation onGetLocation={this.getUserLocation}/>
//                 <Map/>
//             </View>
//         );
//     }
// }
