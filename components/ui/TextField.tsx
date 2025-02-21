import { TextInput, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol, IconSymbolName } from './IconSymbol';
import { useThemeColor } from '@/hooks/useThemeColor';

interface TextFieldProps {
  label: string;
  error?: string;
  lightColor?: string;
  darkColor?: string;
  leadingIcon?: IconSymbolName;
  trailingIcon?: IconSymbolName;
}

export default function TextField({
  label,
  error,
  lightColor,
  darkColor,
  leadingIcon,
  trailingIcon,
  ...props
}: TextFieldProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <ThemedView className="h-16 flex flex-row items-center px-4 rounded-lg">
      {leadingIcon && (
        <View className="pr-2">
          <IconSymbol size={24} name={leadingIcon} color={color} />
        </View>
      )}
      <TextInput
        className="flex-1 rounded-lg text-xl font-inter outline-none"
        style={{ color }}
        {...props}
      />
      {trailingIcon && (
        <View className="pl-2">
          <IconSymbol size={24} name={trailingIcon} color={color} />
        </View>
      )}
    </ThemedView>
  );
}
