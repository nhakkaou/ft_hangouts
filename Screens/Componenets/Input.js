import {useState} from 'react';
import SendSMS from 'react-native-sms';
import {Alert, Image, TextInput, TouchableOpacity, View} from 'react-native';

const Input = () => {
  const [text, setText] = useState('');
  
  return (
    <View
      style={{
        alignContent: 'flex-end',
        flexDirection: 'row',
        borderColor: '#fff',
        justifyContent: 'space-around',
      }}>
      <TextInput
        style={{
          width: '90%',
          height: 50,
          padding: 5,
          borderWidth: 0.1,
          borderRadius: 50,
          backgroundColor: '#fff',
        }}
        value={text}
        placeholder="Type your SMS ...!"
        onChange={e => setText(e.target.value)}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => sendMessage(text)}>
          <Image
            source={require('../../assets/send.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;
