import { FlatList, View } from 'react-native';
import { CharacterCard, Header, Loader } from '../components';
import { usePaginated } from '../hooks';

const HomePage = () => {
  const { isLoading, characterList, loadCharacters } = usePaginated();

  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <FlatList
          data={characterList}
          keyExtractor={({ id }, index) => `${id * index}`}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => <CharacterCard character={item} />}
          // ListFooterComponent={isLoading ? <Loader /> : null}
          ListFooterComponent={<Loader />}
          onEndReached={loadCharacters}
          onEndReachedThreshold={0.4}
        />
      </View>
    </View>
  );
};

export default HomePage;
