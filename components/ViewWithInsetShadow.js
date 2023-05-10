import React from 'react';
import { StyleSheet, View } from 'react-native';
import InsetShadow from 'react-native-inset-shadow';

const ViewWithInsetShadow = ({children, ...props}) => (
  <View style={{}}>
    <InsetShadow {...props}>
        {children}
    </InsetShadow>
  </View>
);

export default ViewWithInsetShadow;
