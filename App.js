import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.wordstyle}> 110719033 周琪晏 </Text>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BCCBAD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wordstyle: {
    backgroundColor: '#EDF0D3',
    fontSize:32,
    borderRadius:5,
  },

});
