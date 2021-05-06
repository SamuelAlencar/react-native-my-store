import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Icon } from 'react-native-elements';

export default class IcoSearch extends Component {
    render() {
        return (
            <View style={styles.ellipsis}>
                <Icon
                    name='user-circle'
                    type='font-awesome'
                    color= '#fff' />
                    <Text style={styles.textIcons}>Conta</Text>
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