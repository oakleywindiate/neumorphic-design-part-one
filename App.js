import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { PixelRatio, SafeAreaView, StyleSheet, Text, View } from 'react-native';

// -------- IMPORTS -------- //
import Checkbox from './components/CheckBox';
import HomeButton from './components/Home';
import MusicButton from './components/MusicButton';
import ProfileButton from './components/Profile';
import SearchBox from './components/SearchBox';
import SettingsButton from './components/Settings';
import Tabs from './components/Tabs';
import ToggleSwitch from './components/ToggleSwitch';
import ViewWithInsetShadow from './components/ViewWithInsetShadow';

export default function App() {
  return (
    <View style={styles.containerBackground}>
      <View style={styles.box}></View>
      <View style={styles.container}>
      <ViewWithInsetShadow shadowColor={"red"}>
        <SearchBox />
      </ViewWithInsetShadow>
        <View style={styles.tabs}>
        {/* <InsetShadow> */}
          <Tabs />
        {/* </InsetShadow> */}
        </View>
        {/* <View style={styles.switchContainer}>
          <ToggleSwitch />
          <ToggleSwitch />
        </View> */}
        {/* <View style={styles.checkboxContainer}>
          <Checkbox />
          <Checkbox />
        </View>
        <View style={styles.selectionContainer}>
          <HomeButton />
          <ProfileButton />
          <SettingsButton />
        </View>
        <View style={styles.musicWrapper}>
          <MusicButton />
        </View> */}
        <StatusBar style="auto" />
      </View>
    </View>  
  );
}


const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    backgroundColor: '#e6edf6',
  },
  box: {
    position: 'absolute',
    margin: 20,
    width: '90%',
    height: '96%',
    borderRadius: 40,
    shadowOffset: { width: 5, height: 3 },
    shadowRadius: 7,
    backgroundColor: '#e4edf6',
    shadowColor: '#6e727c',
    shadowOpacity: .5,
    zIndex: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 20,
    borderRadius: 40,
    backgroundColor: '#e4edf6',
    shadowOffset: { width: -5, height: -5 },
    shadowColor: '#fff',
    shadowOpacity: .8,
    shadowRadius: 5,
    zIndex: 1,
    fontFamily: 'Poppins',
  },
  switchContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  musicWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  tabs: {
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#e4edf6',
  },
});


