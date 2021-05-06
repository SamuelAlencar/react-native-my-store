import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Logo from './Logo';
import IconMenu from './IconMenu';

export default class HeaderContent extends Component {
    render() {
        return (
            <View style={styles.headerContent}>
                <Logo></Logo>
                <IconMenu></IconMenu>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContent: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 20,
    }
})



