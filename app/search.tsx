import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { CharacterCard, SearchHeader } from '../components';
import { useSearch } from '../hooks';

const Search = () => {
  const { top } = useSafeAreaInsets();
  const { results, query, setQuery, error } = useSearch();

  const handleTouchablePress = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <SearchHeader query={query} setQuery={setQuery} />
      <TouchableWithoutFeedback onPress={handleTouchablePress}>
        <View
          style={{
            ...styles.flashListContainer,
            paddingBottom: 10,
            marginTop: Platform.OS === 'ios' ? top + 60 : top + 85,
          }}
        >
          <FlashList
            data={results}
            estimatedItemSize={200}
            keyExtractor={({ id }) => `${id}`}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({ item }) => <CharacterCard character={item} />}
            ListHeaderComponent={
              error ? (
                <Text style={styles.error}>
                  {error} with it: {query}
                </Text>
              ) : null
            }
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  error: {
    color: '#2C3E50',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 10,
  },
  flashListContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
  },
});
