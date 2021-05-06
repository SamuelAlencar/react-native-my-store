import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements';

export default class IconHome extends Component {
    render() {
        return (
            <View style={styles.ellipsis}>
                <Icon
                    name='home'
                    type='font-awesome'
                    color= '#fff' />
                    <Text style={styles.textIcons}>Início</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ellipsis:{
        alignSelf: 'center',
        paddingHorizontal:20
    },
    textIcons:{
        fontSize:8,
        color: '#ffffff',
        textTransform: 'uppercase',
        marginTop: 5
    }
})