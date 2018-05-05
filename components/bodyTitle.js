import React from 'react';

import { Text } from 'react-native';

const bodyTitle = (props) => {
  return (
    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#4B4B4B'}}>{props.children}</Text>
  );
}

export default bodyTitle;