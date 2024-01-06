import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { Character } from '../../types/index';
import { FadeInImage } from '../fadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  character: Character;
}
export const CharacterCard = ({ character }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        router.push({
          pathname: `character/${character.id}`,
          params: { id: character.id },
        })
      }
    >
      <View style={{ ...styles.container, width: windowWidth * 0.4 }}>
        <FadeInImage uri={character.image} style={styles.image} />
        <Text style={styles.name}>{character.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 120,
    width: 150,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    left: 10,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
