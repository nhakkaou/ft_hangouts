import React from "react";
import Contact from "./Componenets/Contact";
import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
const Contacts = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={[
            {
              key: "1",
              name: "Nour Dine",
              phone: "+212659281381",
            },
            {
              key: "2",
              name: "Nour Dine",
              phone: "+212659281381",
            },
            {
              key: "3",
              name: "Nour Dine",
              phone: "+212659281381",
            },
            {
              key: "4",
              name: "Nour Dine",
              phone: "+212659281381",
            },
            {
              key: "5",
              name: "Nour Dine",
              phone: "+212659281381",
            },
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Contact name={item.name} phone={item.phone} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </SafeAreaView>
  );
};

export default Contacts;
