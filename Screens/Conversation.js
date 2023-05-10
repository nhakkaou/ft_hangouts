import {useEffect, useContext} from 'react';
import {ScrollView, View} from 'react-native';
import Message from './Componenets/Message';
import Input from './Componenets/Input';
import {UserContext} from '../Context/User';

const Conversation = ({route}) => {
  const {addMessage} = useContext(UserContext);
  console.log('ROUTE', route);
  const sendMessage = () => {
    console.log(text);
    if (text != '')
      SendSMS.send(
        {
          // Message body
          body: text,
          // Recipients Number
          recipients: ['+212659281381'],
          // An array of types
          // "completed" response when using android
          successTypes: ['sent', 'queued'],
        },
        (completed, cancelled, error) => {
          if (completed) {
            Alert.alert('SMS Sent Completed');
          } else if (cancelled) {
            Alert.alert('SMS Sent Cancelled');
          } else if (error) {
            Alert.alert('Error try Again');
          }
        },
      );
    // addMessage();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fafafa',
      }}>
      <ScrollView>
        <Message avatarSource={'as'} />
        <Message />
      </ScrollView>
      <Input
        style={{
          alignContent: 'flex-end',
        }}
        onSubmit={sendMessage}
      />
    </View>
  );
};

export default Conversation;
