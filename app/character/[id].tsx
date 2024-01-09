import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import { Loader } from '../../components';
import { useCharacter } from '../../hooks';
import { formatDate } from '../../utils';

const Character = () => {
  const { top } = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { character, isLoading } = useCharacter(id);

  const {
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    created,
  } = character;

  const characterInfo = [
    { label: 'Origin', value: origin?.name },
    { label: 'Gender', value: gender },
    { label: 'Species', value: species },
    { label: 'Type', value: type },
    { label: 'Status', value: status },
    { label: 'Location', value: location?.name },
    { label: 'Created', value: formatDate(created) },
  ];

  const statusColor = () => {
    let color = 'gray';
    if (status === 'Dead') {
      return (color = 'red');
    } else if (status === 'Alive') {
      return (color = '#2ECC71');
    } else {
      return color;
    }
  };

  if (isLoading)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </View>
    );

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View style={{ ...styles.imageContainer, marginTop: top + 20 }}>
        <Image
          source={{ uri: image }}
          style={{
            ...styles.image,
            borderColor: statusColor(),
          }}
          resizeMode="cover"
        />
        <View
          style={[styles.statusContainer, { backgroundColor: statusColor() }]}
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
        <View>
          <Text style={styles.name} adjustsFontSizeToFit numberOfLines={2}>
            {name}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ ...styles.backButton, top: top + 20 }}
      >
        <Octicons name="arrow-left" size={32} color="#40b5cb" />
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        {characterInfo.map(({ label, value }) => (
          <View key={label} style={styles.infoCharacter}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}> {value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  imageContainer: {
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 22,
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 120,
    borderWidth: 5,
    marginBottom: 5,
  },
  name: {
    fontSize: 45,
    fontWeight: '300',
    color: '#40b5cb',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
    textAlign: 'center',
  },
  statusContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  portalImage: {
    width: 280,
    height: 280,
  },
  infoCharacter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 7,
    backgroundColor: '#D6EAF8',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  value: {
    fontSize: 16,
    color: '#2C3E50',
  },
});
