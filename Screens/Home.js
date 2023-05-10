import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import User from './Componenets/User';
import {UserContext} from '../Context/User';
const Home = ({navigation}) => {
  const [coversation, setCnvs] = useState([]);

  const {ColorSelected, getAllConversation} = useContext(UserContext);
  useEffect(() => {
    let cnv = getAllConversation();
    console.log('cnv', cnv);
  }, []);
  const renderListItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Messages', {userId: item.id})}>
        <View
          style={{
            marginBottom: 40,
          }}>
          <User
            name={item.name}
            time={item.time}
            message={item.message}
            read={item.read}
            img={item.img}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <View>
        <StatusBar backgroundColor={ColorSelected} />
        <FlatList
          data={coversation}
          renderItem={renderListItem}
          keyExtractor={item => item.name}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
