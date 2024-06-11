import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchRealEstateLinks = async () => {
  const { data } = await axios.get(`${process.env.BACKEND_URL}/links`);
  return data.filter(link => link.category === 'realestate');
};

export default function RealEstate() {
  const { data, error, isLoading } = useQuery('realestateLinks', fetchRealEstateLinks);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/realestate.jpg')}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Real Estate</Text>
      </View>
      {data.map((link) => (
        <View key={link._id} style={styles.linkBox}>
          <Text style={styles.linkName}>{link.name}</Text>
          <Text style={styles.linkUrl}>{link.url}</Text>
          <Text style={styles.linkDescription}>{link.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fdf5e6', // Light beige background color
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  linkBox: {
    width: '90%',
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
  linkName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  linkUrl: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 5,
  },
  linkDescription: {
    fontSize: 16,
    color: '#666',
  },
});
