import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #45108A;
  padding-top: ${Platform.OS === 'ios' ? `${getStatusBarHeight()}px` : '0'};
`;
