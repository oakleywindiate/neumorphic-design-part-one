import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dpSize } from './Styles';
import ViewWithInsetShadow from './ViewWithInsetShadow';
import InsetShadow from 'react-native-inset-shadow';

function SearchBox({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    setSearchText('');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    // <InsetShadow>
      <View style={styles.container}>
        <Icon
          name="search"
          color="rgba(136, 136, 136, .3)"
          style={styles.icon}
          onPress={clearSearch}
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={setSearchText}
          value={searchText}
          onFocus={handleFocus}
          onSubmitEditing={clearSearch}
          selectionColor={'rgba(136, 136, 136, .5)'}
        />
      </View>
    // </InsetShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    // borderColor: 'green',
    // borderWidth: 5,
    backgroundColor: '#e4edf6',
    padding: 5,
  },
  input: {
    flex: 1,
    height: 50,
    padding: 5,
    fontSize: dpSize * 2,
    color: 'rgba(136, 136, 136, .3)',
  },
  icon: {
    fontSize: dpSize * 2.5,
    padding: 10,
  },
});

export default SearchBox;
