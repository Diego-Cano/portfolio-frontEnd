import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileBox({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <Image
          source={require('../assets/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.description}>
        Hello! I'm a dedicated individual living in Seattle, soon to join a real estate brokerage. Alongside my real estate career, I'm showcasing my coding portfolio, highlighting my skills in various programming languages and frameworks. Currently pursuing my bachelor's degree, I am committed to personal and professional growth. In my spare time, I enjoy outdoor activities and staying fit, striving to make a positive impact in my community. Thank you for visiting my portfolio. Please feel free to explore my projects and reach out with any inquiries or opportunities.        </Text>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => navigation.navigate('Portfolio')}
        >
          <Text style={styles.linkText}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => navigation.navigate('RealEstate')}
        >
          <Text style={styles.linkText}>Real Estate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => navigation.navigate('MoreAboutMe')}
        >
          <Text style={styles.linkText}>More About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkBox}
          onPress={() => navigation.navigate('ContactMe')}
        >
          <Text style={styles.linkText}>Contact Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fdf5e6', // Light beige background color
  },
  profileBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
    width: '90%',
  },
  profileImage: {
    width: 250, // Increased image size
    height: 250, // Increased image size
    borderRadius: 125,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 25,
    backgroundColor: '#f5deb3', // Light wheat color for background
    padding: 15,
    borderRadius: 15,
    color: '#666',
  },
  linksContainer: {
    width: '100%',
    alignItems: 'center',
  },
  linkBox: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
