import { useCallback } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { CharacterCard, Loader } from '../components';
import { usePaginated } from '../hooks';
import { Character } from '../types';

const HomePage = () => {
  const { isLoading, characterList, loadCharacters } = usePaginated();

  const keyExtractor = useCallback((item: Character) => `${item.id}`, []);
  const renderItem = useCallback(
    (item: Character) => <CharacterCard character={item} />,
    []
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.flashListContainer}>
        <FlashList
          numColumns={2}
          data={characterList}
          keyExtractor={keyExtractor}
          estimatedItemSize={200}
          onEndReached={loadCharacters}
          onEndReachedThreshold={0.5}
          renderItem={({ item }) => renderItem(item)}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={isLoading ? <Loader /> : null}
          decelerationRate={0.7}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  flashListContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
  },
});
