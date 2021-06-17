import * as S from './styles';

import React, { useCallback, useEffect, useRef } from 'react';
import { Text, TextInput } from 'react-native';

import { useField } from '@unform/core';

function Input({ name, label, onChangeText, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);



  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;

        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;

      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <>
      {label && <S.Label>{label}</S.Label>}

      <S.Input
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        className={error ? 'has-herror' : ''}
        {...rest}
      />

      { error && <S.LabelError>{error}</S.LabelError>}
    </>
  );
}

export default Input;