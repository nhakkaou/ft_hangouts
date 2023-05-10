import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const Avatar = props => {
  const src = !props.source
    ? props.sex === 'F'
      ? require('../../assets/avatarF.png')
      : require('../../assets/avatar.png')
    : require('../../assets/avatar.png');
  const styles = StyleSheet.create({
    Avatar: {
      width: props.width | 70,
      height: props.height | 70,
      borderRadius: 50,
      margin: 5,
      border: 'none',
    },
  });
  return (
    <View style={styles.Avatar}>
      <ImageBackground
        source={src}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
        imageStyle={{
          borderRadius: 50,
        }}
      />
    </View>
  );
};

export default Avatar;
