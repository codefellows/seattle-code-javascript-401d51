import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Vibration, Button, FlatList, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {

    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const contactsData = await Contacts.getContactsAsync();
        setContacts(contactsData.data);
        Vibration.vibrate([100, 200, 100]);
      }
    };

    getContacts();

  }, []);

  const call = (person) => {
    const phoneNumber = person.phoneNumbers[0].digits;
    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Button title={item.name || 'No Name'}
          onPress={() => call(item)} />}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 50
  }
})
