import { Image, StyleSheet, View } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/portal.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});
