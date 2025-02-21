import TextField from '@/components/ui/TextField';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function SignupScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Text className="text-xl mb-4">Signup Screen</Text>
        <View className="w-96 flex flex-col gap-3">
          <TextField label="Email" leadingIcon="mail.fill" />
          <TextField
            label="Password"
            leadingIcon="shield.righthalf.filled"
            trailingIcon="eye.slash.circle"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
