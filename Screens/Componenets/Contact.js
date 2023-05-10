import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Avatar from './Avatar';
import {useNavigation} from '@react-navigation/native';

const Contact = ({navigate, name, phone, show, id}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 80,
        }}>
        <Avatar />
        <View
          style={{
            marginLeft: 20,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 18, marginBottom: 3}}>{name}</Text>
          <Text>{phone}</Text>
        </View>
      </View>
      {show && (
        <View
          style={{
            width: '100%',
            justifyContent: 'space-around',
            flexDirection: 'row',
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Messages', {data: id})}>
            <Image
              source={require('../../assets/sms.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/edit.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/delete.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Contact;
