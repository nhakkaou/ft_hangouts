import React, { useContext, useEffect, useState } from "react";
import Contact from "./Componenets/Contact";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import { UserContext } from "../Context/User";
const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [target, setTarg] = useState();
  const { getContat } = useContext(UserContext);
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await getContat();
        console.log(result);
        if (result) setUsers(result.rows._array);
      } catch (e) {
        console.log("ERROR", e);
      }
    }
    getUsers();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={users}
          renderItem={({ item }) => (
            <TouchableOpacity
              onLongPress={() => setTarg(item.id)}
              key={item.id}
            >
              <Contact
                name={item.name}
                phone={item.phone}
                show={target === item.id}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Contacts;
