import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.containerLogo}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/originals/e8/bc/67/e8bc67ca9ad1d7300e79e43faa2f59b5.png',
                        cache: 'only-if-cached'
                    }}
                    style={styles.logo}
                />
                <Text style={styles.textLogo}>Shopp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerLogo: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 5, 
        borderRadius: 30,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#2378ff',
    },
    logo: {
        width: 30,
        height: 30, 
    },
    textLogo: {
        fontSize: 10,
        color: '#2378ff',
        fontWeight: 'bold'
    }
})

