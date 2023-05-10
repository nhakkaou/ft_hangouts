import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import Avatar from './Componenets/Avatar';
import {UserContext} from '../Context/User';

const AddUser = ({navigation}) => {
  const {addContat} = useContext(UserContext);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('M');
  const saveContact = async () => {
    try {
      if (phone && name) {
        const result = await addContat(phone, name, sex);
        if (result.rowsAffected != 0) navigation.navigate('Contacts');
      }
    } catch (e) {
      Alert.alert('The contact already exist');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar sex={sex} />
        <TextInput
          style={styles.Input}
          placeholder="Contact name"
          placeholderTextColor="gray"
          onChangeText={text => {
            setName(text);
          }}
        />
        <TextInput
          style={styles.Input}
          placeholder="Phone number"
          placeholderTextColor="gray"
          onChangeText={text => {
            setPhone(text);
          }}
          keyboardType="numeric"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
            padding: 10,
          }}>
          <TouchableOpacity onPress={() => setSex('M')}>
            <Text style={[styles.SelectNone, sex == 'M' && styles.Select]}>
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSex('F')}>
            <Text
              onPress={() => setSex('F')}
              style={[styles.SelectNone, sex == 'F' && styles.SelectSecond]}>
              Female
            </Text>
          </TouchableOpacity>
          {/* #7867679c */}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00a8ff',
            width: '50%',
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={saveContact}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Save contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
  },
  Select: {
    fontWeight: 'bold',
    color: '#0086ff',
    textDecoration: 'underline',
    fontSize: 15,
  },
  SelectNone: {
    fontWeight: 400,
    color: '#000',
    textDecoration: 'none',
    fontSize: 12,
  },
  SelectSecond: {
    fontWeight: 'bold',
    color: '#7867679c',
    textDecoration: 'underline',
    fontSize: 15,
  },
});
export default AddUser;
