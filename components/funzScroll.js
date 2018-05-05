import React from 'react';

import { ScrollView } from 'react-native';

const funzScroll = (props) => {
  return (
    <ScrollView horizontal={true} style={{marginBottom: 30}}>
      {props.children}
    </ScrollView>
  );
}

export default funzScroll;