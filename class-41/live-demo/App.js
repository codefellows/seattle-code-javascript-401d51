import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Linking, StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useState([]);

  // we can get a single phone number.  
  // contacts[0].phoneNumbers[0].number
  // console.log('my contacts', contacts[0].phoneNumbers[0].number);
  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      console.log('status', status)
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        setContacts(data);
        // if (data.length > 0) {
        //   const contact = data[0];
        //   console.log(contact);
        // }
      }
    };
    getContacts();
  }, []);

  const call = (contact) => {
    let phoneNumber = contact.phoneNumbers[0].number

    const link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(e => console.error(e));
  }

  const renderItem = ({ item }) => {
    console.log('item from render item function', item)
    return <View style={styles.item}>
      <Button
        onPress={() => call(item)}
        title={item.name}
      />
    </View>
  }


  return (
    <View style={styles.container}>
      <Text>Contacts!</Text>
      <FlatList
        data={contacts}
        renderItem={renderItem}
      />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  item: {
    marginVertical: 5,
    marginHorizontal: 25
  }
});
