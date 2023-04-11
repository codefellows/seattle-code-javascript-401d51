import { ScrollView, HStack } from 'native-base';


const ScrollableTileList = ({ data, renderItem, next, previous, getPage }) => {

const Stack = () => data ?
  <HStack space={3} justifyContent="center" flexWrap="wrap">
    {data.map(pokemon => renderItem(pokemon))}
  </HStack> : null;
  
  return (
    <ScrollView>
      <Stack />
    </ScrollView>
  )
};

export default ScrollableTileList;
