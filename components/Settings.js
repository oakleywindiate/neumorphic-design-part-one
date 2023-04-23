import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function SettingsButton() {
  return (
    <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={null}>
        <Icon name="cog" size={40} color="#000" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: 'row',
    },
    button: {
      width: 100, 
      height: 100, 
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default SettingsButton;