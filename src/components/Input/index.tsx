import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  placeholderTextColor?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<any> = ({ placeholder, placeholderTextColor, value, onChangeText, ...rest } : InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[styles.input, isFocused && styles.focusedInput]}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  focusedInput: {
    borderColor: 'green', // Cor da borda quando o TextInput está ativo
  },
});

export default Input;
