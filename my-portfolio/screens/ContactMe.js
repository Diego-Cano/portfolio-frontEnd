import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchContactLinks = async () => {
  const { data } = await axios.get(`${process.env.BACKEND_URL}/links`);
  return data.filter(link => link.category === 'contact');
};

export default function ContactMe() {
  const { data, error, isLoading } = useQuery('contactLinks', fetchContactLinks);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Here you can handle the form submission, for example, send the data to your backend
    Alert.alert('Message Sent', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/contactme.jpg')}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Contact Me</Text>
      </View>
      {data.map((link) => (
        <View key={link._id} style={styles.linkBox}>
          <Text style={styles.linkName}>{link.name}</Text>
          <Text style={styles.linkUrl}>{link.url}</Text>
          <Text style={styles.linkDescription}>{link.description}</Text>
        </View>
      ))}
      <View style={styles.formBox}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Message"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
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
  formBox: {
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
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    width: '100%',
    height: 100,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
