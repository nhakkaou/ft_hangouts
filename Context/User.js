import React, {createContext, useEffect, useState} from 'react';
import SQLite from 'react-native-sqlite-storage';
const UserContext = createContext();

const UserProvider = ({children}) => {
  const [ColorSelected, setColor] = useState('#00a8ff');
  const [db, setDb] = useState(SQLite.openDatabase('example.db'));
  const getContat = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM users;',
          null,
          (_, resultSet) => resolve(resultSet),
          reject,
        );
      });
    });
  };
  const addContat = (phone, name, sex) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO users (name, phone, sex) VALUES (?, ?, ?);',
          [name, phone, sex],
          (_, resultSet) => resolve(resultSet),
          err => reject(err),
        );
      });
    });
  };
  const getAllConversation = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT sender, recipient, message, time\
          FROM sms_messages\
          GROUP BY\
            CASE WHEN sender < recipient THEN sender || ' -
            ' || recipient ELSE recipient || ' -
            ' || sender END\
          ORDER BY time ASC;\
          ',
          null,
          (_, resultSet) => resolve(resultSet),
          err => reject(err),
        );
      });
    });
  };

  const getConversation = () => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          "SELECT * FROM sms_messages\
          WHERE (sender = '1234567890' AND recipient = '0987654321')\
          OR (sender = '0987654321' AND recipient = '1234567890')\
          ORDER BY timestamp;",
          null,
          (_, resultSet) => resolve(resultSet),
          err => reject(err),
        );
      });
    });
  };
  const addMessage = (sender, idReceiver, message) => {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO sms_messages (sender, recipient, message) VALUES (?, ?, ?)',
          [sender, idReceiver, message],
          (_, resultSet) => {},
          err => reject(err),
        );
      });
    });

    //
  };
  useEffect(() => {
    try {
      SQLite.enablePromise(true);
      db.transaction(tx => {
        tx.executeSql(
          "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30) NOT NULL UNIQUE, phone VARCHAR(30), pic BLOB, sex VARCHAR(4) DEFAULT 'M')",
        );
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS sms_messages (id INTEGER PRIMARY KEY AUTOINCREMENT, sender VARCHAR(255) NOT NULL, recipient VARCHAR(255) NOT NULL, message TEXT NOT NULL, FOREIGN KEY (sender) REFERENCES users(id), FOREIGN KEY (recipient) REFERENCES users(id), time DATETIME DEFAULT CURRENT_TIMESTAMP);',
        );
        tx.executeSql('INSERT INTO users (name) VALUES ("Me");');
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const ft_ChangeColor = async color => {
    setColor(color);
  };
  return (
    <UserContext.Provider
      value={{
        ColorSelected,
        ft_ChangeColor,
        addContat,
        getContat,
        getAllConversation,
        getConversation,
        addMessage,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
