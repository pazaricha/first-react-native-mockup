import React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

// You can import from local files
import Icon from 'react-native-vector-icons/MaterialIcons';

const funzBox = (props) => {
  return (
    <View style={[styles.funzBoxBase, props.wide ? styles.funzBoxWide : styles.funzBoxThin]}>

      <TouchableOpacity style={styles.bookmarkIcon}>
        <Icon color='#fff' name="favorite-border" size={35} />
      </TouchableOpacity>
      <Image source={{ uri: 'https://d1cgjtrsdeqk19.cloudfront.net/user_image_uploads/funz/eDlE5D1eH5QL0utq88Q06GC6ZFXSoEqx/small/2018_04_04_14_14_54_____PTOhkm_906.png' }} style={props.wide ? styles.funzBoxImageWide : styles.funzBoxImageThin} />
      <View style={props.wide ? styles.funzBoxContentWide : styles.funzBoxContentThin}>
        <Text style={props.wide ? styles.funzBoxTitleWide : styles.funzBoxTitleThin}>LDN Talks - How Should We Feel About Global Warming?</Text>
        <Text style={styles.funzBoxsubtitle}>11 July (5 more dates)</Text>
        <Text style={styles.funzBoxsubtitle}>Adult $42 | Kid $30</Text>
        <View style={styles.funzBoxStarsAndGuests}>
          <View style={styles.funzBoxStars}>
            <Icon color='#fbce60' name="star" size={12}/>
            <Icon color='#fbce60' name="star" size={12}/>
            <Icon color='#fbce60' name="star" size={12}/>
            <Icon color='#fbce60' name="star" size={12}/>
            <Icon color='#fbce60' name="star" size={12}/>
            <Text style={styles.funzBoxStarsText}>(120)</Text>
          </View>
          <View>
            <Text style={styles.funzBoxStarsText}>2560 Guests</Text>
          </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  funzBoxBase: {
    backgroundColor: '#ffffff',
    borderRadius: 3,
    overflow: 'hidden',
    marginRight: 5
  },
  funzBoxThin: {
    width: 200,
    height: 280,
  },
  funzBoxWide: {
    width: 300,
    height: 325,
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 7,
    left: 7,
    zIndex: 1,
    shadowColor: 'black',
    shadowOpacity: 0.75,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    }
  },
  funzBoxImageThin: {
    height: 145
  },
  funzBoxImageWide: {
    height: 200
  },
  funzBoxContentThin: {
    paddingVertical: 5,
    paddingHorizontal: 7,
  },
  funzBoxContentWide: {
    padding: 7,
  },
  funzBoxTitleThin: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginBottom: 5
  },
  funzBoxTitleWide: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginBottom: 5
  },
  funzBoxsubtitle: {
    fontSize: 12,
    color: '#4B4B4B',
  },
  funzBoxStarsAndGuests: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  funzBoxStars: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  funzBoxStarsText: {
    fontSize: 12,
    color: '#b3b3b3'
  }
});

export default funzBox;