import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Avatar from './Componenets/Avatar';
import ChangeColor from './Componenets/ChangeColor';
const Profile = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: '#fff', height: '100%', padding: 20}}>
        <View style={styles.infosUser}>
          <Avatar width={110} height={110} />
          <View style={styles.contacts}>
            <View style={styles.content}>
              <Text style={[styles.text, {fontWeight: '900'}]}>1234</Text>
              <Text style={styles.text}>Contacts</Text>
            </View>
            <View style={styles.content}>
              <Text style={[styles.text, {fontWeight: '900'}]}>100</Text>
              <Text style={styles.text}>Message</Text>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 900,
          }}>
          Customize profile
        </Text>
        <ChangeColor />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  infosUser: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contacts: {
    flexDirection: 'row',
    gap: 30,
  },
  content: {
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
  },
});
export default Profile;
