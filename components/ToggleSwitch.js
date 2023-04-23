import React, { useState } from 'react';
import { Switch, StyleSheet, View } from 'react-native';

// -------- IMPORTS -------- //
import { margins } from './Styles';

function ToggleSwitch() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch style={styles.switch}
        trackColor={{ false: 'yellow', true: 'green' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
    },
});

export default ToggleSwitch;