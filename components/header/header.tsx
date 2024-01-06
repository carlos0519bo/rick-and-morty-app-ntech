import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const Header = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: top + 3,
        marginBottom: top + 15,
      }}
    >
      <Image
        source={require('../../assets/logo.png')}
        style={{
          width: 120,
          height: 40,
        }}
      />

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            width: '100%',
            borderColor: '#40b5cb',
            borderWidth: 1,
          }}
        />
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="search" size={15} color="#40b5cb" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '60%',
    height: 40,
  },
  search: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
    borderColor: '#40b5cb',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
});
