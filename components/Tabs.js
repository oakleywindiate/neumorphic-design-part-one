import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ViewWithInsetShadow from './ViewWithInsetShadow';
import InsetShadow from 'react-native-inset-shadow';

const Tabs = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    // <ViewWithInsetShadow>
        <View style={styles.buttonGroup}>
            <ViewWithInsetShadow
                shadowColor={"red"}
                shadowRadius={5}
                bottom={false}
                right={false}
                >
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Tab 1</Text>
                </TouchableOpacity>
            </ViewWithInsetShadow>
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Tab 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Tab 1</Text>
                </TouchableOpacity>
        </View>
    // </ViewWithInsetShadow>
  );
};

const styles = StyleSheet.create({
    buttonGroup: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#e4edf6',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'transparent',
        shadowOffset: {
          width: -3,
          height: -3,
        },
        shadowRadius: 5,
        shadowColor: '#fff',
        shadowOpacity: 1,
    },
    shadow: {
    },
    button: {
        width: 100, 
        height: 60, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#e4edf6',
        borderWidth: 1,
        borderColor: 'transparent',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 2,
        shadowColor: '#fff',
        shadowOpacity: 1,
    },
    buttonText: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default Tabs;
