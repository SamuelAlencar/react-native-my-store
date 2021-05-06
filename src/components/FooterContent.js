import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { Icon } from 'react-native-elements';

// import IconMenu from './IconMenu';
import IconUser from './IconUser';
import IconCart from './IconCart';
import IconSearch from './IconSearch';
import IconHome from './IconHome';

export default class footerContent extends Component {
    render() {
        return (
            <View style={styles.footerContent} >
                <IconHome></IconHome>
                <IconSearch></IconSearch>
                <IconCart></IconCart>
                <IconUser></IconUser>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footerContent: {
        paddingHorizontal:10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#2378ff',
        position: 'absolute',
        bottom: 0,
        right: 0, 
        left: 0
    }
})

