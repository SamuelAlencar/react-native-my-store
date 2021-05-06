import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';

import HeaderContent from './HeaderContent';
import MainContent from './MainContent';
import FooterContent from './FooterContent';


export default class Home extends Component {
  render() {
    return (
    <View style={styles.container}>
      <HeaderContent></HeaderContent>
      <ScrollView >
          <MainContent></MainContent>
      </ScrollView>
      <FooterContent style={styles.footer}></FooterContent>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'space-between',
    minHeight: '100%'
  },
  image: {
    flex:1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },    
})

