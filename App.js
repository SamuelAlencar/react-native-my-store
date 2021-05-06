import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Home from './src/components/Home';


export default function App() {
  return (
    <View >
      <Home></Home>
      <StatusBar  style="auto" backgroundColor="#2378ff" />
    </View>
  );
}

const styles = StyleSheet.create({
});
