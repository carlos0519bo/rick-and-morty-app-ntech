import { Stack } from 'expo-router';
import { HomeHeader } from '../components';

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          header: () => <HomeHeader />,
        }}
      />
      <Stack.Screen
        name="character/[id]"
        options={{ headerShown: false, animation: 'fade' }}
      />
      <Stack.Screen
        name="search"
        options={{
          headerShown: false,
          gestureDirection: 'vertical',
          gestureEnabled: false,
          animation: 'fade_from_bottom',
        }}
      />
    </Stack>
  );
};

export default RootLayout;
