import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileBox from '../components/ProfileBox';

export default function AboutMe({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfileBox navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf5e6', // Light beige background color
  },
});
