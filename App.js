import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// You can import from local files
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

import FunzBox from './components/funzBox';
import BodyTitle from './components/bodyTitle';
import FunzScroll from './components/funzScroll';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBarTab}>
            <Text style={styles.topBarTabText}>FOR YOU</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBarTabActive}>
            <Text style={styles.topBarTabTextActive}>DISCOVER</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.sliderWrapper}>
              <Swiper showsButtons={false} autoplay={true} dotColor='#fff' activeDotColor='#6C3E6C' paginationStyle={styles.paginationStyle}>
                <View style={styles.slide1}>
                  <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                  <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                  <Text style={styles.text}>And simple</Text>
                </View>
              </Swiper>
            </View>

            <View style={styles.innerBody}>
              
              <BodyTitle>LAST TICKETS</BodyTitle>
              <FunzScroll>
                <FunzBox />
                <FunzBox />
                <FunzBox />
                <FunzBox />
                <FunzBox />
              </FunzScroll>

              <BodyTitle>EDITOR PICKS</BodyTitle>
              <FunzScroll>
                <FunzBox wide={true}/>
                <FunzBox wide={true}/>
                <FunzBox wide={true}/>
                <FunzBox wide={true}/>
                <FunzBox wide={true}/>
              </FunzScroll>

            </View>
            
          </ScrollView>
        </View>
        

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.tabLink}>
            <Icon style={styles.tabIconActive} name="explore" size={25}/>
            <Text style={styles.tabTitleActive}>Discover</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabLink}>
            <Icon style={styles.tabIcon} name="search" size={25}/>
            <Text style={styles.tabTitle}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabLink}>
            <Icon style={styles.tabIcon} name="favorite" size={25}/>
            <Text style={styles.tabTitle}>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabLink}>
            <Icon style={styles.tabIcon} name="notifications" size={25}/>
            <Text style={styles.tabTitle}>Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabLink}>
            <Icon style={styles.tabIcon} name="person" size={25}/>
            <Text style={styles.tabTitle}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  topBar: {
    backgroundColor: '#fefefe',
    flex: 0.75,
    borderBottomWidth: 1, 
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  topBarTab: {
    justifyContent: 'center',
  },
  topBarTabText: {
    fontSize: 14,
    justifyContent: 'center',
    color: '#aaa',
    fontWeight: 'bold'
  },
  topBarTabActive: {
    justifyContent: 'center',
    borderBottomColor: '#6C3E6C',
    borderBottomWidth: 4,
  },
  topBarTabTextActive: {
    fontSize: 14,
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#6C3E6C',
  },

  sliderWrapper: {
    height: 250,
    marginBottom: 20
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  paginationStyle: {
    justifyContent: 'flex-start',
    bottom: 20,
    left: 20
  },

  innerBody: {
    paddingLeft: 10
  },

  funzBox1: {
    width: 200,
    height: 270,
    backgroundColor: '#ffffff',
    borderRadius: 3,
    overflow: 'hidden'
  },
  funzBox1Image: {
    height: 150
  },
  funzBox1Content: {
    // flex: 1,
    padding: 5
  },
  funzBoxTitle: {
    fontSize: 15,
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
  },

  bottomBar: {
    flex: 1,
    backgroundColor: '#fefefe',
    borderTopWidth: 1, 
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabLink: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    color: '#aaa',
  },
  tabIconActive: {
    color: '#555',
  },
  tabTitleActive: {
    color: '#555',
  },
  tabTitle: {
    paddingTop: 5,
    fontSize: 11,
    color: '#aaa',
  },
  body: {
    flex: 10,
    backgroundColor: '#f7f7f7'
  }
});