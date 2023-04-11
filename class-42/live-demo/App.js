import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Pressable, Box, Button, HStack, VStack, Center } from "native-base";
import useGetAxios from './hooks/getAxios';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import ScrollableTileList from './Components/ScrollableTileList';

const config = {
  dependencies: {
    // from these docs:  https://docs.nativebase.io/setup-provider
    "linear-gradient": LinearGradient,
  },
};


export default function App() {
  const { results, next, previous, getPage } = useGetAxios('https://pokeapi.co/api/v2/pokemon');
  // console.log(results);

  const renderItem = (item) => (
    <Pressable key={item.url} w="40%" onPress={() => Haptics.selectionAsync()}>
      <Center
        m="2"
        bg={'primary.100'}
        p="2"
        rounded="xl"
      >
        {item.name}
      </Center>

    </Pressable>
  )

  return (
    <NativeBaseProvider config={config}>
      <Box
        safeArea
        bg={{
          linearGradient: {
            colors: ['amber.700', 'primary.600'],
            start: [0, 0],
            end: [1, 0]
          }
        }}
      >
        <Box
          bg={'primary.800'}
          p="5"
          rounded="xl"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center'
          }}
        >
          Pokemon List
        </Box>
        <VStack mt="3" space={3} alignItems="center">

          <ScrollableTileList
            data={results}
            renderItem={renderItem}
          />
        </VStack>
        {
          previous &&
          <Button
            onPress={() => getPage(previous)}
            colorScheme="secondary"
          >
            Previous
          </Button>
        }
        <Button
          onPress={() => getPage(next)}
        >
          Next
        </Button>


      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
