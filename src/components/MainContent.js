import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Slider from './Slider';
import LinearGradient from 'react-native-linear-gradient';

const images = [
    'https://lumiere-a.akamaihd.net/v1/images/disney-shop_landing_mobile_marvel_800x600px_sem_ponto_11effac8.png',
    'https://i1.wp.com/popoca.com.br/wp-content/uploads/2018/08/captain-marvel-1.jpg?fit=800%2C458&ssl=1',
    'https://wikicult.com.br/wp-content/uploads/2019/12/vi%C3%BAva-negra-banner.png',
    'https://manualdosgames.com/wp-content/uploads/2020/10/lego-marvel-landscape.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyvVqmg_MZheIEmnfkWyFgEuexVhVqHKK9v6f_vXXTubtUAuXYbI-rkHqhXeS9n1l_-Q&usqp=CAU'
]

export default class MainContent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Slider images={images} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})

