import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { Icon } from 'react-native-elements';

export default class IconMenu extends Component {
    render() {
        return (
            <View style={styles.ellipsis}>
                <Icon
                    name='bars'
                    type='font-awesome'
                    color= '#2378ff' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ellipsis:{
        alignSelf: 'center',
        marginRight: 20
    }
})