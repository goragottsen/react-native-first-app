import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
        <TextInput placeholder="Course Goal" style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10}} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
