import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';
import AppNavigator from './AppNavigator';

const App = () => {

  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <AppNavigator />
      </View>
    </SafeAreaView>
  );
};

export default App;
