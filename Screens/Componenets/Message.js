import React from "react";
import { View, Text } from "react-native";
import Avatar from "./Avatar";

const Message = ({ avatarSource }) => {
  return (
    <View>
      {avatarSource ? (
        <View style={{ flexDirection: "row" }}>
          <Avatar style={{ width: 50, height: 50 }} />
          <View
            style={{
              backgroundColor: "#00a8ff",
              borderRadius: 5,
              padding: 5,
              margin: 5,
              width: "80%",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "justify" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur facere officiis corrupti, magni facilis iusto
              accusantium ipsam nostrum exercitationem consequuntur natus
              accusamus adipisci veritatis dignissimos! Quod at fugit maxime
              dicta! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur facere officiis corrupti, magni facilis iusto
              accusantium ipsam nostrum exercitationem consequuntur natus
              accusamus adipisci veritatis dignissimos! Quod at fugit maxime
              dicta! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur facere officiis corrupti, magni facilis iusto
              accusantium ipsam nostrum exercitationem consequuntur natus
              accusamus adipisci veritatis dignissimos! Quod at fugit maxime
              dicta!
            </Text>
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: 5,
            margin: 5,
            width: "90%",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            facere officiis corrupti, magni facilis iusto accusantium ipsam
            nostrum exercitationem consequuntur natus accusamus adipisci
            veritatis dignissimos! Quod at fugit maxime dicta!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Message;
