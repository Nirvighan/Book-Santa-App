import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';
import firebase from 'firebase';

import db from '../config.js';

export default class NotificationsScreen extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           userId:firebase.auth().currentUser.email,
           allNotifications:[],

       }
    }

    addNotifications

    render(){
        return(
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}