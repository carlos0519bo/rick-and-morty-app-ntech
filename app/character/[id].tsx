import {
  router,
  useGlobalSearchParams,
  useLocalSearchParams,
  useRouter,
} from 'expo-router';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loader } from '../../components';
import { useCharacter } from '../../hooks';

const Character = () => {
  const { top } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { character, isLoading } = useCharacter(Number(id));

  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  } = character || {};

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </View>
    );

  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ ...styles.backButton, top: top + 5 }}
        >
          <Octicons name="arrow-left" size={32} color="white" />
        </TouchableOpacity>
        {status !== 'unknown' && (
          <View
            style={[
              styles.statusContainer,
              status === 'Dead'
                ? { backgroundColor: 'red' }
                : { backgroundColor: '#2ECC71' },
            ]}
          >
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              {status}
            </Text>
          </View>
        )}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infoCharacterContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>Origin: {origin?.name}</Text>
          <Text>Gendre: {gender}</Text>
          <Text>Species: {species}</Text>
          <Text>Type: {type}</Text>
          <Text>Status: {status}</Text>
          <Text>Episodes: {episode?.length}</Text>
          <Text>Location: {location?.name}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: '#40b5cb',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  infoCharacterContainer: {
    padding: 20,
  },
  name: {
    fontSize: 50,
    fontWeight: '500',
    color: '#40b5cb',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  statusContainer: {
    position: 'absolute',
    bottom: 20,
    right: 30,
    padding: 10,
    borderRadius: 10,
  },
});
