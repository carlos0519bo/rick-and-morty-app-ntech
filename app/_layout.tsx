import { Stack } from 'expo-router';
import { Header } from '../components';

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header />,
          contentStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      <Stack.Screen name="character/[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
