import * as React from "react";
import { UserProvider } from "./Context/User";
import AppContainer from "./AppContainer";

function App() {
  return (
    <UserProvider>
      <AppContainer />
    </UserProvider>
  );
}
export default App;
