import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Avatar from './Avatar';

const User = ({name, time, message, read = true, img}) => {
  return (
    <View style={styles.user}>
      <View style={styles.name}>
        <Avatar source={img} />
        <View
          style={{
            height: 70,
            padding: 15,
            width: '80%',
            alignContent: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 20, fontWeight: !read ? 'bold' : 'normal'}}>
              {name}
            </Text>
            <Text style={{fontSize: 13, fontWeight: !read ? 'bold' : 'normal'}}>
              {time}
            </Text>
          </View>
          <Text style={{fontSize: 17, fontWeight: !read ? 'bold' : 'normal'}}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  user: {
    width: '100%',
    height: '15%',
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)',
  },
});
export default User;
