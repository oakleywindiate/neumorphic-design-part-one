import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Checkbox = ({ label }) => {
    const [isChecked, setChecked] = useState(false);
  
    const handleCheck = () => {
      setChecked(!isChecked);
    };

  return (
    <TouchableOpacity onPress={handleCheck} style={styles.container}>
      <View style={styles.checkbox}>
        {isChecked && <Icon name="check" size={30} color="green" />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 50,
      height: 50,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    label: {
      fontSize: 16,
    },
  });


export default Checkbox;
