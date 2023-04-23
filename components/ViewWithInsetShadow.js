import React from 'react';
import { StyleSheet, View } from 'react-native';
import InsetShadow from './InsetShadow';

const ViewWithInsetShadow = ({
  children,
  style,
  shadowColor
//   shadowRadius,
//   shadowOffset,
//   shadowOpacity,
//   color,
//   bottom = true,
//   right = true,
}) => (
  <View style={{ height: 80 }}>
    <InsetShadow>
        {children}
    </InsetShadow>
  </View>
);

export default ViewWithInsetShadow;
