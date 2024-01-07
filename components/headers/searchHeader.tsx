import { router } from 'expo-router';
import React from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';

interface Props {
  query: string;
  setQuery: (text: string) => void;
}

export const SearchHeader = ({ query, setQuery }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        ...styles.container,
        top: Platform.OS === 'ios' ? top : top + 30,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Octicons name="arrow-left" size={32} color="#40b5cb" />
      </TouchableOpacity>

      <TextInput
        value={query}
        autoFocus={true}
        placeholder="Search..."
        onChangeText={(text) => setQuery(text)}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => query && setQuery('')}
        disabled={!query}
      >
        <FontAwesome
          name={query ? 'close' : 'search'}
          size={18}
          color="#40b5cb"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
    borderColor: '#40b5cb',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    right: 45,
    top: 10,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: '#40b5cb',
    borderWidth: 1,
    width: '85%',
    height: 40,
  },
});
