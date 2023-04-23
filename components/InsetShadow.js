import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

const InsetShadow = ({ children, ...props }) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.shadow}
        // shadowRadius={8}
        shadowColor={'red'}
        // elevation={2}
        // shadowOpacity={.5}
        // top={true}
        // bottom={true}
        // left={true} 
        // right={true} 
        >{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // overflow: 'hidden',
    // borderColor: 'green',
    // borderWidth: 3,
  },
  shadow: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: -2,
    //   height: -2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    // elevation: Platform.OS === 'android' ? 4 : 0,
    // backgroundColor: 'transparent',
    // borderRadius: 15,
    // padding: 5,
  },
});

export default InsetShadow;
